import MutablePoint from "../../../common/model/MutablePoint";
import CommonObjectId from "../../../common/model/CommonObjectId";
import Point from "../../../common/model/Point";

export default class ScreenContext {
    private _id: number;
    private _watchPoint: MutablePoint;
    
    private _containObjectIdList: Array<CommonObjectId>;

    constructor(id: number, watchPoint: MutablePoint, containObjectIdList: Array<CommonObjectId>) {

    }

    public get watchPoint(): MutablePoint {
        return this._watchPoint;
    }

    public getRelationalPoint(targetPoint: Point): Point {
        const relationX: number = targetPoint.x - this.watchPoint.x;
        const relationY: number = targetPoint.y - this.watchPoint.y;
        return new Point(relationX, relationY);
    }
}
