import Point from "../../../common/model/Point";
import BasicObject from "../model/BasicObject"
import BasicObjectId from "../model/BasicObjectId";

export default interface BasicObjectRepository {
    findById(id: BasicObjectId): BasicObject;
    findAll(): Array<BasicObject>;
    add(object: BasicObject): void;
    updateContentById(id: BasicObjectId, newContent: string): void;
    updateAbsolutePointById(id: BasicObjectId, newAbsolutePoint: Point): void;
    nextBasicObjectId(): BasicObjectId;
}
