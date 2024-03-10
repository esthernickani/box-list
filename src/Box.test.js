import React from "react";
import Box from "./Box";
import { render } from "@testing-library/react";
import { v4 as uuid } from 'uuid';

it("renders without crashing", function() {
    const id = uuid()
    const mockRemove = jest.fn()
    render(<Box width={20} height={20} backgroundColor="red" key={id} id={id} handleRemove={mockRemove} />)
})

it("matches snapshot", function() {
    const id = uuid()
    const mockRemove = jest.fn()
    
    const { asFragment } = render(<Box width={20} height={20} backgroundColor="red" key={id} id={id} handleRemove={mockRemove} />)
    expect(asFragment()).toMatchSnapshot()
})