import Node from "./Node";
import TreeId from "./TreeId";

export default class Tree {
    private _id: TreeId;
    private _rootNode: Node;

    constructor(id: TreeId, rootNode: Node) {
        this._id = id;
        this._rootNode = rootNode;
    }

    get id(): TreeId {
        return this._id;
    }

    get rootNode(): Node {
        return this._rootNode;
    }
    
}
