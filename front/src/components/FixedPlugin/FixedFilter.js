/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
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
