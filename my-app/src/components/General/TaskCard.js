import React from "react";

// will be used in two diffrent pages
export default ({ deleteCard, editCard, taskId, openTaskCard }) => {
  return (
    <div>
      Task Card
      <button onClick={() => deleteCard(taskId)}>Delete</button>
      <button onClick={() => openTaskCard(taskId)}>Edit</button>
    </div>
  );
};
