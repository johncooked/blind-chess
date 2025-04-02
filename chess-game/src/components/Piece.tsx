import React from "react";

interface PieceProps {
    type: string; // The piece type (e.g., "pawn", "rook", etc.)
    color: "white" | "black";
}

const Piece: React.FC<PieceProps> = ({ type, color }) => {
    return <div className={`piece ${color} ${type}`}>{type}</div>;
};

export default Piece;
