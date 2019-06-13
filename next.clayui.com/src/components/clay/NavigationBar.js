/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLink from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';
import Editor from './Editor';
import React from 'react';

const spritemap = '/images/icons/icons.svg';

const NavigationBar = () => {
	const scope = {ClayLink, ClayNavigationBar, spritemap};
	const code = `const Component = () => {

	return (
        <ClayNavigationBar triggerLabel="Item 1" spritemap={spritemap}>
            <ClayNavigationBar.Item active>
                <ClayLink className="nav-link" displayType="unstyled">
                    Item 1
                </ClayLink>
            </ClayNavigationBar.Item>
            <ClayNavigationBar.Item>
                <ClayLink className="nav-link" displayType="unstyled">
                    Item 2
                </ClayLink>
            </ClayNavigationBar.Item>
            <ClayNavigationBar.Item>
                <ClayLink className="nav-link" displayType="unstyled">
                    Item 3
                </ClayLink>
            </ClayNavigationBar.Item>
		</ClayNavigationBar>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

const NavigationBarWithStyledItem = () => {
    const scope = {ClayNavigationBar, spritemap};
    const code = `const Component = () => {

    const btnStyle = {
        padding: "5.5px 16px 5.5px 16px",
        borderColor: "var(--indigo)"
    };

    return (
        <ClayNavigationBar triggerLabel="Item 1" spritemap={spritemap}>
            <ClayNavigationBar.Item active>
                    <button className="btn btn-unstyled btn-block btn-sm" style={btnStyle} type="button">Item 1</button>
            </ClayNavigationBar.Item>
            <ClayNavigationBar.Item>
                    <button className="btn btn-unstyled btn-block btn-sm" style={btnStyle} type="button">Item 2</button>
            </ClayNavigationBar.Item>
            <ClayNavigationBar.Item>
                    <button className="btn btn-unstyled btn-block btn-sm" style={btnStyle} type="button">Item 3</button>
            </ClayNavigationBar.Item>
        </ClayNavigationBar>
    );
}
    
render(<Component />)`;
    
    return <Editor code={code} scope={scope} />;
}

export {NavigationBar, NavigationBarWithStyledItem};