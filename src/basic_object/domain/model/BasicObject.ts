import Point from "../../../common/model/Point";
import Magnitude from "../../../common/model/Magnitude";
import BasicObjectId from "./BasicObjectId";

export default class BasicObject {
    private _id: BasicObjectId;
    private _content: string;
    private _absolutePoint: Point;
    private _magnitude: Magnitude;

    constructor(id: BasicObjectId, content: string, absolutePoint: Point) {
        this._id = id;
        this._content = content;
        this._absolutePoint = absolutePoint;
        this._magnitude = new Magnitude(10, 10);  // Should be changed. Auto calulate.
    }

    public get id(): BasicObjectId {
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

    public changeContent(newContent: string): void {
        this._content = newContent;
    }

    public movePoint(newPoint: Point): void {
        this._absolutePoint = newPoint;
    }

    public changeMagnitude(newMagnitude: Magnitude): void {
        this._magnitude = newMagnitude;
    }
}
