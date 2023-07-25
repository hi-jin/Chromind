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
import BasicObjectMapper from "./mapper/BasicObjectMapper";
import { MAPPER } from "../../config/constant/mapper";

@injectable()
export default class BasicObjectServiceImpl implements BasicObjectService {

    private _createBasicObjectQuery: CreateBasicObjectQuery;
    private _getBasicObjectQuery: GetBasicObjectQuery;
    private _updateBasicObjectQuery: UpdateBasicObjectQuery;

    private _basicObjectMapper: BasicObjectMapper;

    constructor(
        @inject(QUERY.CreateBasicObjectQuery) createBasicObjectQuery: CreateBasicObjectQuery,
        @inject(QUERY.GetBasicObjectQuery) getBasicObjectQuery: GetBasicObjectQuery,
        @inject(QUERY.UpdateBasicObjectQuery) updateBasicObjectQuery: UpdateBasicObjectQuery,
        @inject(MAPPER.BasicObjectMapper) basicObjectMapper: BasicObjectMapper
    ) {
        this._createBasicObjectQuery = createBasicObjectQuery;
        this._getBasicObjectQuery = getBasicObjectQuery;
        this._updateBasicObjectQuery = updateBasicObjectQuery;
        this._basicObjectMapper = basicObjectMapper;
    }

    createBasicObject(content: string, absolutePoint: Point): CommonObjectId {
        return this._createBasicObjectQuery.createBasicObject(content, absolutePoint);
    }

    getBasicObjectById(id: CommonObjectId): CommonObject {
        const object = this._getBasicObjectQuery.getBaiscObjectById(id);
        return this._basicObjectMapper.basicObjectToCommonObject(object);
    }

    getBasicObjectsByIdList(idList: Array<CommonObjectId>): Array<CommonObject> {
        return idList.map(id => {
            const object = this._getBasicObjectQuery.getBaiscObjectById(id);
            return this._basicObjectMapper.basicObjectToCommonObject(object);
        });
    }

    updateContentById(updatedCommonObject: CommonObject): void {
        this._updateBasicObjectQuery.updateContentById(updatedCommonObject.id, updatedCommonObject.content);
    }

    updateAbsolutePointById(updatedCommonObject: CommonObject): void {
        this._updateBasicObjectQuery.updateAbsolutePointById(updatedCommonObject.id, updatedCommonObject.absolutePoint);
    }
}
