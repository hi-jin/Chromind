import Magnitude from "../../../common/model/Magnitude";
import Point from "../../../common/model/Point";
import NodeId from "./NodeId";
import TreeId from "./TreeId";

export default class Node {
    private _id: NodeId;
    private _treeId: TreeId;
    private _nodeList: Array<Node>;
    private _content: string;
    private _relativePoint: Point;  // Tree replace function can fill this field.
    private _magnitude: Magnitude;

    constructor(id: NodeId | number, treeId: TreeId, content: string, relativePoint: Point, magnitude: Magnitude) {
        if (typeof id === "number") this._id = new NodeId(id);
        else this._id = id;
        this._treeId = treeId;
        this._nodeList = new Array<Node>;
        this._content = content;
        this._relativePoint = relativePoint;
        this._magnitude = magnitude  // Should be changed. Auto calulate.
    }

    get id(): NodeId {
        return this._id;
    }

    get treeId(): TreeId {
        return this._treeId;
    }

    get nodeList(): Array<Node> {
        return this._nodeList;
    }

    get content(): string {
        return this._content;
    }

    get relativePoint(): Point | undefined {
        return this._relativePoint;
    }

    get magnitude(): Magnitude {
        return this._magnitude;
    }

}
