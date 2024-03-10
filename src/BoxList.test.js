import React from "react";
import BoxList from "./BoxList";
import { fireEvent, render } from "@testing-library/react";

const addBox = (boxList, height = 15, width = 15, backgroundColor = "olivegreen") => {
    const widthInput = boxList.getByLabelText("Width")
    const heightInput = boxList.getByLabelText("height")
    const backgroundColorInput = boxList.getByLabelText("Background Color")
    const btn = boxList.getByText("Submit")

    fireEvent.change(widthInput, { target: { value: width}})
    fireEvent.change(heightInput, { target: { value: height}})
    fireEvent.change(backgroundColorInput, { target: { value: backgroundColor}})

    fireEvent.click(btn);
}

it("renders without crashing", function() {
    render(<BoxList />)
})

it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})

it("adds new box", function() {
    const boxList = render(<BoxList />)

    const removeBtn = boxList.queryByText("remove")
    expect(removeBtn).not.toBeInTheDocument();

    addBox(boxList)

    const remove = boxList.getByText("remove")
    expect(remove).toBeInTheDocument();
    expect(remove.previousSibling).toHaveStyle(`
        width: 15px;
        height: 15px;
        background-color: olivegreen;
    `)

})

it("removes a box", function() {
    const boxList = render(<BoxList />)
    addBox(boxList)

    const removeBtn = boxList.getByText("remove")
    fireEvent.click(removeBtn)

    expect(removeBtn).not.toBeInTheDocument()
})