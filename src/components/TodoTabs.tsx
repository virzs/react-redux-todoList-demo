import { Tabs } from "@fluent-windows/core";
import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter, stateTypes } from "../actions/todo.action";
import Filter from "./TodoFilter";

interface visibilityFilterTypes {
  title: string;
  value: string;
}

const visibilityFilters = [
  {
    title: "全部",
    value: "SHOW_ALL",
  },
  {
    title: "已完成",
    value: "SHOW_COMPLETED",
  },
  {
    title: "未完成",
    value: "SHOW_ACTIVE",
  },
];

interface TabTypes {
  filter: string;
  changeFilter: (value: any) => void;
}

//将state内容加入props
const mapStateToProps = (state: stateTypes) => {
  return {
    filter: state.visibilityFilter,
  };
};

//将dispatch加入props
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeFilter: (filter: string) => {
      dispatch(setVisibilityFilter(filter));
    },
  };
};

const TodoTabs = (props: TabTypes) => {
  const tabsChange = (value: React.ReactText) => {
    props.changeFilter(value);
  };
  return (
    <Tabs onChange={tabsChange} value={props.filter}>
      {visibilityFilters.map((item: visibilityFilterTypes, index: number) => {
        return (
          <Tabs.Panel {...item} key={index}>
            <Filter active={item.title}></Filter>
          </Tabs.Panel>
        );
      })}
    </Tabs>
  );
};

const FilterTabs = connect(mapStateToProps, mapDispatchToProps)(TodoTabs);

export default FilterTabs;
