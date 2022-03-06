import React, { Component } from "react";

import { Dropdown, Form } from "react-bootstrap";

function FixedFilter(props) {
  return (
    <div className="fixed-plugin">
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-fixed-plugin"
          variant=""
          className="text-white border-0 opacity-100"
        >
          <i className="fas fa-cogs fa-2x mt-1"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <li className="header-title">Kategorija</li>
          <li className="adjustments-line d-flex align-items-center justify-content-between">
            <Form.Select
              onChange={(event) => {
                props.setCategory(event.target.value);
              }}
            >
              {props.categories.map((el, index) =>
                props.category == el ? (
                  <option value={el} key={index} selected="true">
                    {el}
                  </option>
                ) : (
                  <option value={el} key={index} selected="true">
                    {el}
                  </option>
                )
              )}
            </Form.Select>
          </li>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FixedFilter;
