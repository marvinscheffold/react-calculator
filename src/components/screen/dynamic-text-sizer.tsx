import React, { ReactElement } from "react";

type Props = {
    children: ReactElement[];
    maxPercent?: number;
    minPercent: number;
    changePerChar: number;
    startAtChar?: number;
};

export function DynamicTextSizer({
    children,
    maxPercent = 100,
    minPercent,
    changePerChar,
    startAtChar = 0,
}: Props) {
    const fontSizeInPercent = getNewFontSizeInPercent(
        maxPercent,
        minPercent,
        changePerChar,
        startAtChar,
        getCurrentNumberOfChars(children)
    );

    return (
        <span style={{ fontSize: `${fontSizeInPercent}%` }}>{children}</span>
    );
}

const getCurrentNumberOfChars = (children: ReactElement[]): number => {
    let returnable = 0;
    children.forEach((child) => {
        if (child.props.children) {
            returnable += child.props.children.length;
        } else {
            returnable += 1;
        }
    });

    return returnable;
};

const getNewFontSizeInPercent = (
    maxPercent: number,
    minPercent: number,
    changePerChar: number,
    startAtChar: number,
    currentNumberOfChars: number
) => {
    const charsToConsider = Math.max(0, currentNumberOfChars - startAtChar);
    const fontSizeInPercent = Math.max(
        minPercent,
        maxPercent - changePerChar * charsToConsider
    );
    return fontSizeInPercent;
};
