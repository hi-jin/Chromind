// ioc
import { Container } from "inversify";
import { QUERY } from "./constant/query";
import { REPOSITORY } from "./constant/repository";
import "reflect-metadata"

// QUERY
import CreateBasicObjectQuery from "../basic_object/application/query/CreateBasicObjectQuery";
import GetBasicObjectQuery from "../basic_object/application/query/GetBasicObjectQuery";
import UpdateBasicObjectQuery from "../basic_object/application/query/UpdateBasicObjectQuery";

// REPOSITORY
import BasicObjectRepository from "../basic_object/domain/repository/BasicObjectRepository";
import BasicObjectRepositoryImpl from "../basic_object/repository/BasicObjectRepositoryImpl";


const diContainer: Container = new Container();

// QUERY
diContainer.bind<CreateBasicObjectQuery>(QUERY.CreateBasicObjectQuery).to(CreateBasicObjectQuery);
diContainer.bind<GetBasicObjectQuery>(QUERY.GetBasicObjectQuery).to(GetBasicObjectQuery);
diContainer.bind<UpdateBasicObjectQuery>(QUERY.UpdateBasicObjectQuery).to(UpdateBasicObjectQuery);

// REPOSITORY
diContainer.bind<BasicObjectRepository>(REPOSITORY.BasicObjectService).to(BasicObjectRepositoryImpl)

export { diContainer };
