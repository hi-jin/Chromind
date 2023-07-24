import Point from "../../../common/model/Point";
import Magnitude from "../../../common/model/Magnitude";
import CommonObjectId from "../../../common/model/CommonObjectId";

export default class CommonObject {
    private _id: CommonObjectId;
    private _content: string;
    private _absolutePoint: Point;
    private _magnitude: Magnitude;

    constructor(id: CommonObjectId, content: string, absolutePoint: Point, magnitude: Magnitude) {
        this._id = id;
        this._content = content;
        this._absolutePoint = absolutePoint;
        this._magnitude = magnitude;
    }

    public get id(): CommonObjectId {
        return this._id;
    }
    
    public get content(): string {
        return this._content;
    }

    public get absolutePoint(): Point {
        return this._absolutePoint;
    }

    public get magnitude(): Magnitude {
        return this._magnitude;
    }
    
}
