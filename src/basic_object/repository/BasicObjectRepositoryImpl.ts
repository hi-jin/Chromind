import { injectable } from "inversify";
import "reflect-metadata"

import Point from "../../common/model/Point";
import BasicObject from "../domain/model/BasicObject";
import BasicObjectId from "../domain/model/BasicObjectId";
import BasicObjectRepository from "../domain/repository/BasicObjectRepository";

@injectable()
export default class BasicObjectRepositoryImpl implements BasicObjectRepository {

    private _dummyBasicObject: BasicObject = new BasicObject(new BasicObjectId(1), "test", new Point(1, 2))

    public findById(id: BasicObjectId): BasicObject {
        return this._dummyBasicObject;
    }

    public findAll(): Array<BasicObject> {
        return [this._dummyBasicObject];
    }

    public add(object: BasicObject): void {

    }

    public updateContentById(id: BasicObjectId, newContent: string): void {

    }

    public updateAbsolutePointById(id: BasicObjectId, newAbsolutePoint: Point): void {
        
    }

    public nextBasicObjectId(): BasicObjectId {
        return new BasicObjectId(1);
    }
}
