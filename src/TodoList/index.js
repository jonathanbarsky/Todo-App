import React from "react";
import './TodoList.css'

function TodoList(props) {
    return (
      <section>
        <ul>
          {props.childrem}
        </ul>
      </section>
    );
}

export {TodoList};