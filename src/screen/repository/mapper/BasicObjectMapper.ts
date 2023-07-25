import { injectable } from "inversify";
import "reflect-metadata";

import BasicObject from "../../../basic_object/domain/model/BasicObject";
import CommonObject from "../../domain/model/CommonObject";

@injectable()
export default class BasicObjectMapper {
    public basicObjectToCommonObject(basicObject: BasicObject): CommonObject {
        const id = basicObject.id;
        const content = basicObject.content;
        const absolutePoint = basicObject.absolutePoint;
        const mangitude = basicObject.magnitude;
        return new CommonObject(id, content, absolutePoint, mangitude);
    }

    public commonObjectToBasicObject(commonObject: CommonObject): BasicObject {
        const id = commonObject.id;
        const content = commonObject.content;
        const absolutePoint = commonObject.absolutePoint;
        const magnitude = commonObject.magnitude;
        return new BasicObject(id, content, absolutePoint, magnitude);
    }
}
