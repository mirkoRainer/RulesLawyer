import React, { ReactNode, useEffect, useState } from "react";
import DraggableFlatList, {
    DragEndParams,
    DraggableFlatListProps,
    RenderItemParams,
} from "react-native-draggable-flatlist";
import { Item } from "../../../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";

/**
 * The label for a Section with the Filter function to determine what falls under the section. If more than one Section result in the same filter, only the first Section in the array will have the <T> under it.
 *
 * @param label - The name to be displayed a the beginning of a section.
 * @param sectionFilter - A function used to determine if an item belongs to a section or not. Items will be grouped under the first section in the array of Sections on DraggableSectionList.
 * @param collapsed - Set this property to toggle a Section.
 */
export type SectionHeaderData<T> = {
    label: string;
    sectionFilter: (item: T | string) => boolean;
    collapsed: boolean;
};

type Modify<T, R> = Omit<T, keyof R> & R;

/**
 * Props for the DraggableSectionList
 *
 * @typeParam T - The item type listed under the sections
 * @param sections - SectionHeaderData<T>
 * @param renderItem - The render component for items
 * @param renderSectionHeader - The render component for SectionHeaders
 * @param keyExtractor - Used to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks item.key, then falls back to using the index, like React does.
 * @param sectionHeaderKeyExtractor - For Sections: Used to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks item.key, then falls back to using the index, like React does.
 */
interface DraggableSectionListProps {
    data: (Item | string)[];
    sections: SectionHeaderData<Item>[];
    renderItem: (params: RenderItemParams<Item>) => ReactNode;
    renderSectionHeader: (params: RenderItemParams<string>) => ReactNode;
    keyExtractor: (item: Item, index: number) => string;
    sectionHeaderKeyExtractor: (sectionHeader: string, index: number) => string;
}

type State = {
    renderItemsList: (Item | string)[];
};

const DraggableSectionList: React.FC<
    DraggableSectionListProps &
        Omit<
            DraggableFlatListProps<Item | string>,
            "data" | "keyExtractor" | "renderItem"
        >
> = (props) => {
    const populateRenderItemsList = () => {
        // Add Sections and data to the renderItemsList
        let renderItems: (Item | string)[] = [];
        props.sections.forEach((x) => {
            renderItems.push(x.label);
            renderItems = renderItems.concat(
                props.data.filter((y) => {
                    return x.sectionFilter(y);
                })
            );
        });
        return renderItems;
    };

    const [state, setState] = useState<State>({
        renderItemsList: populateRenderItemsList(),
    });
    let renderItemsList = state.renderItemsList;

    const onDragEnd: (params: DragEndParams<string | Item>) => void = (
        params
    ) => {
        let items = params.data;
        if (typeof params.data[params.to] === "string") {
            // it's a section header!
        }
        setState({
            ...state,
            renderItemsList: items,
        });
    };
    const renderItem: (params: RenderItemParams<Item | string>) => ReactNode = (
        params
    ) => {
        if (typeof params.item === "string") {
            return props.renderSectionHeader(
                params as RenderItemParams<string>
            );
        }
        return props.renderItem(params as RenderItemParams<Item>);
    };
    const keyExtractor: (item: Item | string, index: number) => string = (
        item,
        index
    ) => {
        if (typeof item === "string") {
            return props.sectionHeaderKeyExtractor(item as string, index);
        }
        return props.keyExtractor(item as Item, index);
    };
    return (
        <DraggableFlatList<Item | string>
            {...props}
            data={renderItemsList}
            onDragEnd={onDragEnd}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
};

export default DraggableSectionList;
