import React from "react";
import CardEdit from "./CardEdit";
import CardDisplay from "./CardDisplay";

const CardBody = (props) => ((props.edit)  ? <CardEdit {...props} /> : <CardDisplay {...props} />);

export default CardBody
