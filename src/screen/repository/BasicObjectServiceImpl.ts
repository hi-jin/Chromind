import { inject, injectable } from "inversify";
import { QUERY } from "../../config/constant/query";
import "reflect-metadata";

import CreateBasicObjectQuery from "../../basic_object/application/query/CreateBasicObjectQuery";
import GetBasicObjectQuery from "../../basic_object/application/query/GetBasicObjectQuery";
import UpdateBasicObjectQuery from "../../basic_object/application/query/UpdateBasicObjectQuery";
import CommonObjectId from "../../common/model/CommonObjectId";
import Point from "../../common/model/Point";
import CommonObject from "../domain/model/CommonObject";
import BasicObjectService from "../domain/repository/BasicObjectService";

@injectable()
export default class BasicObjectServiceImpl implements BasicObjectService {

    private _createBasicObjectQuery: CreateBasicObjectQuery;
    private _getBasicObjectQuery: GetBasicObjectQuery;
    private _updateBasicObjectQuery: UpdateBasicObjectQuery;

    constructor(
        @inject(QUERY.CreateBasicObjectQuery) createBasicObjectQuery: CreateBasicObjectQuery,
        @inject(QUERY.GetBasicObjectQuery) getBasicObjectQuery: GetBasicObjectQuery,
        @inject(QUERY.UpdateBasicObjectQuery) updateBasicObjectQuery: UpdateBasicObjectQuery,
    ) {
        this._createBasicObjectQuery = createBasicObjectQuery;
        this._getBasicObjectQuery = getBasicObjectQuery;
        this._updateBasicObjectQuery = updateBasicObjectQuery;
    }

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
