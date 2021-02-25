import {
  setVisibilityFilterTypes,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from "../actions/todo.action";

const { SHOW_ALL } = VisibilityFilters;

export const visibilityFilter = (
  state = SHOW_ALL,
  action: setVisibilityFilterTypes
) => {
  switch (action.type) {
    //设置todo信息根据状态显示
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
