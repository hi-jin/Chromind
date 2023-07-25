import CommonObjectId from "../../../common/model/CommonObjectId";
import Point from "../../../common/model/Point";
import CommonObject from "../model/CommonObject";

export default interface BasicObjectService {
    createBasicObject(content: string, absolutePoint: Point): CommonObjectId;
    getBasicObjectById(id: CommonObjectId): CommonObject;
    getBasicObjectsByIdList(idList: Array<CommonObjectId>): Array<CommonObject>;
    updateContentById(updatedCommonObject: CommonObject): void;
    updateAbsolutePointById(updatedCommonObject: CommonObject): void;
}
