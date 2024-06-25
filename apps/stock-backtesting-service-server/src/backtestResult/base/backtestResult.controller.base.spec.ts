import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { BacktestResultController } from "../backtestResult.controller";
import { BacktestResultService } from "../backtestResult.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  backtestDate: new Date(),
  createdAt: new Date(),
  finalCapital: 42.42,
  id: "exampleId",
  initialCapital: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  backtestDate: new Date(),
  createdAt: new Date(),
  finalCapital: 42.42,
  id: "exampleId",
  initialCapital: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    backtestDate: new Date(),
    createdAt: new Date(),
    finalCapital: 42.42,
    id: "exampleId",
    initialCapital: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  backtestDate: new Date(),
  createdAt: new Date(),
  finalCapital: 42.42,
  id: "exampleId",
  initialCapital: 42.42,
  updatedAt: new Date(),
};

const service = {
  createBacktestResult() {
    return CREATE_RESULT;
  },
  backtestResults: () => FIND_MANY_RESULT,
  backtestResult: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("BacktestResult", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BacktestResultService,
          useValue: service,
        },
      ],
      controllers: [BacktestResultController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /backtestResults", async () => {
    await request(app.getHttpServer())
      .post("/backtestResults")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        backtestDate: CREATE_RESULT.backtestDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /backtestResults", async () => {
    await request(app.getHttpServer())
      .get("/backtestResults")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          backtestDate: FIND_MANY_RESULT[0].backtestDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /backtestResults/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/backtestResults"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /backtestResults/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/backtestResults"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        backtestDate: FIND_ONE_RESULT.backtestDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /backtestResults existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/backtestResults")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        backtestDate: CREATE_RESULT.backtestDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/backtestResults")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
