import {configure, shallow} from "enzyme";
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({adapter: new Adapter()})

describe('<NavigationItems />', () => {
    it('should render 2 navigation item if not authenticated', function () {
        const wrapper = shallow(<NavigationItems />);
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    });
})
