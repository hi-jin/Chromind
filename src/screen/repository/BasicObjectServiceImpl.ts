import CreateBasicObjectService from "../../basic_object/application/query/CreateBasicObjectService";
import GetBasicObjectService from "../../basic_object/application/query/GetBasicObjectService";
import UpdateBasicObjectService from "../../basic_object/application/query/UpdateBasicObjectService";
import CommonObjectId from "../../common/model/CommonObjectId";
import Point from "../../common/model/Point";
import CommonObject from "../domain/model/CommonObject";
import BasicObjectService from "../domain/repository/BasicObjectService";

export default class BasicObjectServiceImpl implements BasicObjectService {

    private createBasicObjectService: CreateBasicObjectService;
    private getBasicObjectService: GetBasicObjectService;
    private updateBasicObjectService: UpdateBasicObjectService;

    createBasicObject(content: string, absolutePoint: Point): CommonObject {
        
    }

    getBasicObjectById(id: CommonObjectId): CommonObject {

    }

    getBasicObjectsByIdList(idList: Array<CommonObjectId>): Array<CommonObject> {

    }

    updateContentById(updatedCommonObject: CommonObject): void {

    }

    updateAbsolutePointById(updatedCommonObject: CommonObject): void {

    }
}
