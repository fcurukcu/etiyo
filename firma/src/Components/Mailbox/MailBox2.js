import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './mailMailBox2.css';
import './perfectScrollbar.css';

class Mailbox2 extends Component {
    // constructor()
    // {
    //     super(props)
    // }
    //muiltr-7ywrpy
    render() {
        return (
            <div className="flex flex-col flex-auto min-h-0 relative z-10">
                <div className="FusePageSimple-root FusePageSimple-scroll-content
                 
                 ">
                    <div className="flex flex-auto flex-col z-10 h-full">
                        <div className="FusePageSimple-wrapper">
                            <div className='row'>
                            <div className='col-md-3'>
                            <div className="MuiDrawer-root MuiDrawer-docked FusePageSimple-sidebarWrapper permanent opened FusePageSimple-leftSidebar muiltr-1tu59u4">
                                <div className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper FusePageSimple-sidebar border-0 permanent MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft muiltr-9p5s34">
                                    <div className="muiltr-1aat207 ps ps--active-y" style={{position: "relative"}}>
                                        <div className="FusePageSimple-sidebarContent">
                                            <div className="flex-auto border-l-1" style={{opacity: 1, transform: "none"}}>
                                                <div className="mb-24 mt-40 mx-24">
                                                    <span className="MuiTypography-root MuiTypography-body1 text-4xl font-extrabold tracking-tight leading-none muiltr-18q2h9t" delay="300" style={{transform: "none"}}>Mailbox</span>
                                                    <div className="mt-32">
                                                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium w-full muiltr-19lqn8q" tabIndex="0" type="button">
                                                            <span className="MuiButton-startIcon MuiButton-iconSizeMedium muiltr-1l6c7y9">
                                                                <svg className="shrink-0 fill-current  MuiBox-root muiltr-ulpizx" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    {/* <use xlink:to="assets/icons/heroicons-outline.svg#plus"></use> */}
                                                                    </svg>
                                                                    </span>
                                                                    Compose
                                                                    </button>
                                                                    </div>
                                                                    </div>
                                                                    <div className="mb-24">
                                                    <p className="MuiTypography-root MuiTypography-body1 px-28 py-10 uppercase text-12 font-600 muiltr-1o72ddl">Mailboxes</p>
                                                    <ul className="MuiList-root MuiList-padding navigation whitespace-nowrap px-12 py-0 active-undefined-list muiltr-1v4wwdz">
                                                        <Link tabIndex="0" itempadding="16" role="button" aria-current="page" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding  MuiListItem-button fuse-list-item muiltr-1sj5ic1 active" to="/apps/mailbox/inbox">
                                                            <svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#inbox"></use> */}
                                                                    </svg>
                                                                    <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Inbox</span>
                                                            </div>
                                                        </Link>
                                                        <Link tabIndex="0" itempadding="16" role="button" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button fuse-list-item muiltr-1sj5ic1"
                                                            to="/apps/mailbox/sent">
                                                            <svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#paper-airplane"></use> */}
                                                            </svg>
                                                            <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Sent</span>
                                                            </div>
                                                        </Link>
                                                        <Link tabIndex="0" itempadding="16" role="button" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button fuse-list-item muiltr-1sj5ic1" to="/apps/mailbox/drafts">
                                                            <svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#document"></use> */}
                                                            </svg>
                                                            <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Drafts</span>
                                                            </div>
                                                        </Link>
                                                        <Link tabIndex="0" itempadding="16" role="button" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button fuse-list-item muiltr-1sj5ic1"
                                                            to="/apps/mailbox/spam">
                                                            <svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#exclamation"></use> */}
                                                            </svg>
                                                            <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Spam</span>
                                                            </div>
                                                        </Link>
                                                        <Link tabIndex="0" itempadding="16" role="button" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button fuse-list-item muiltr-1sj5ic1"
                                                            to="/apps/mailbox/trash">
                                                            <svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#trash"></use> */}
                                                            </svg>
                                                            <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Trash</span>
                                                            </div>
                                                        </Link>
                                                    </ul>
                                                </div>
                                                <div className="mb-24">
                                                    <p className="MuiTypography-root MuiTypography-body1 px-28 py-10 uppercase text-12 font-600 muiltr-1o72ddl">Filters</p>
                                                    <ul className="MuiList-root MuiList-padding navigation whitespace-nowrap px-12 py-0 active-undefined-list muiltr-1v4wwdz">
                                                        <Link tabIndex="0" itempadding="16" role="button" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button fuse-list-item muiltr-1sj5ic1" to="/apps/mailbox/filter/starred">
                                                            <svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#star"></use> */}
                                                            </svg>
                                                            <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Starred</span>
                                                            </div>
                                                        </Link>
                                                        <Link tabIndex="0" itempadding="16" role="button" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button fuse-list-item muiltr-1sj5ic1" to="/apps/mailbox/filter/important">
                                                            <svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#exclamation-circle"></use> */}
                                                            </svg>
                                                            <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Important</span>
                                                            </div>
                                                        </Link>
                                                    </ul>
                                                </div>
                                                <div className="mb-24">
                                                    <p className="MuiTypography-root MuiTypography-body1 px-28 py-10 uppercase text-12 font-600 muiltr-1o72ddl">Labels</p>
                                                    <ul className="MuiList-root MuiList-padding navigation whitespace-nowrap px-12 py-0 active-undefined-list muiltr-1v4wwdz">
                                                        <Link tabIndex="0" itempadding="16" role="button" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button fuse-list-item muiltr-bw9p61" to="/apps/mailbox/label/personal"><svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                            {/* <use xlink:to="assets/icons/heroicons-outline.svg#tag"></use> */}
                                                        </svg>
                                                            <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Personal</span>
                                                            </div>
                                                        </Link>
                                                        <Link tabIndex="0" itempadding="16" role="button" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button fuse-list-item muiltr-ifw74i" to="/apps/mailbox/label/work">
                                                            <svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#tag"></use> */}
                                                            </svg>
                                                            <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Work</span>
                                                            </div>
                                                        </Link>
                                                        <Link tabIndex="0" itempadding="16" role="button" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button fuse-list-item muiltr-1ow689a" to="/apps/mailbox/label/payments">
                                                            <svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#tag"></use> */}
                                                            </svg>
                                                            <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Payments</span>
                                                            </div>
                                                        </Link>
                                                        <Link tabIndex="0" itempadding="16" role="button" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button fuse-list-item muiltr-8fnabo" to="/apps/mailbox/label/invoices">
                                                            <svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#tag"></use> */}
                                                            </svg>
                                                            <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Invoices</span>
                                                            </div>
                                                        </Link>
                                                        <Link tabIndex="0" itempadding="16" role="button" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button fuse-list-item muiltr-145qzft" to="/apps/mailbox/label/accounts">
                                                            <svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#tag"></use> */}
                                                            </svg>
                                                            <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Accounts</span>
                                                            </div>
                                                        </Link>
                                                        <Link tabIndex="0" itempadding="16" role="button" className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button fuse-list-item muiltr-uh4qvz" to="/apps/mailbox/label/forums">
                                                            <svg className="shrink-0 fill-current  fuse-list-item-icon shrink-0 MuiBox-root muiltr-1hkg1jk" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#tag"></use> */}
                                                                </svg>
                                                                <div className="MuiListItemText-root fuse-list-item-text muiltr-1tsvksn">
                                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary text-13 font-medium fuse-list-item-text-primary truncate muiltr-uzix25">Forums</span>
                                                            </div>
                                                        </Link>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}>
                                            <div className="ps__thumb-x" tabIndex="0" style={{ left: "0px", width: "0px" }}>
                                            </div>
                                        </div>
                                        <div className="ps__rail-y" style={{top: "0px", height: "243px", right: "0px"}}>
                                            <div className="ps__thumb-y" tabIndex="0" style={{ top: "0px", height: "61px" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='col-md-3'>
                            <div className="FusePageSimple-contentWrapper">
                                <div className="FusePageSimple-content container muiltr-1aat207 ps ps--active-y" style={{position: "relative"}}>
                                    <div className="flex flex-col w-full">
                                        <div className="sticky top-0 z-10">
                                            <div className="flex flex-col sm:flex-row items-center w-full min-h-64 py-12 sm:py-0 space-x-8 px-8 border-b  MuiBox-root muiltr-bif79f">
                                                <div className="flex items-center">
                                                    <p className="MuiTypography-root MuiTypography-body1 font-semibold uppercase mx-8 muiltr-18q2h9t">Inbox</p>
                                                </div>
                                                <div variant="outlined" className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorSecondary MuiInputBase-fullWidth MuiInputBase-sizeSmall MuiInputBase-adornedStart flex flex-1 items-center px-16 rounded-full muiltr-awuezl">
                                                    <div className="MuiInputAdornment-root MuiInputAdornment-positionStart muiltr-1a6giau">
                                                        <span className="notranslate">&ZeroWidthSpace;</span>
                                                        <svg className="shrink-0 fill-current  MuiBox-root muiltr-qmm07o" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                            {/* <use xlink:to="assets/icons/heroicons-solid.svg#search"></use> */}
                                                        </svg>
                                                    </div>
                                                    <input placeholder="Search for an e-mail or task" type="text" aria-label="Search" className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart muiltr-1w7nzrh"  />
                                                    <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline muiltr-igs3ac">
                                                        <legend className="muiltr-ihdtdm">
                                                            <span className="notranslate">&ZeroWidthSpace;</span>
                                                        </legend>
                                                    </fieldset>
                                                </div>
                                            </div>
                                            <div className="flex items-center w-full min-h-56 px-8 border-b space-x-8 MuiBox-root muiltr-14r34si">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-1szzohb">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall muiltr-e9xox4" tabIndex="0" type="button" aria-label="More" aria-haspopup="true">
                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                        {/* <use xlink:to="assets/icons/heroicons-outline.svg#chevron-down"></use> */}
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <ul className="MuiList-root MuiList-padding p-0 w-full muiltr-1ontqvh">
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n selected" to="/apps/mailbox/inbox/f9c4c091-3ac4-4df9-ac5d-aec7b07c8e3f" aria-current="page">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="https://react-material.fusetheme.com/assets/images/avatars/female-01.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Myra Dudley</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    {/* <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use> */}
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 25</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Please review and sign the attached agreement</span>
                                                                <div className="flex ml-auto pl-8"><svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    {/* <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use> */}
                                                                </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hi Brian,

                                                        Ullamco deserunt commodo esse deserunt deserunt quis eiusmod. Laborum sint excepteur non sit eiusmod sunt voluptate ipsum nisi ullamco magna. Lorem consectetur est do...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/c531bc01-8a9e-481b-adf8-95303a6938c5">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="https://react-material.fusetheme.com/assets/images/avatars/female-01.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Shaw Murray</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 25</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Delivery address confirmation</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Dolore consectetur est cupidatat ipsum reprehenderit anim quis veniam anim ipsum incididunt exercitation. Velit exercitation culpa eiusmod dolore labore irure. Duis...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/ebc80fc3-6c56-4cae-a45a-771b15ced076">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="https://react-material.fusetheme.com/assets/images/avatars/female-01.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Sanders Beck</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 25</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Insurance documents</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hi Brian,

                                                        Aliquip ipsum sunt sit sunt velit velit pariatur. Nisi incididunt eiusmod consequat ut cillum eu exercitation. Enim proident nostrud aute in. Non irure nisi duis aliq...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/981c5ffb-7c88-47a8-b60f-f16150eeae9d">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="https://react-material.fusetheme.com/assets/images/avatars/female-01.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Zimmerman Gould</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 24</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Previous clients and their invoices</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Do aute eu dolore officia laborum id anim fugiat incididunt nulla esse proident. Veniam veniam nostrud ut nisi magna ipsum ea eiusmod esse velit id aliqua nisi irur...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/a8d0645d-ac30-4f1a-a163-06e949120289">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="https://react-material.fusetheme.com/assets/images/avatars/female-01.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Karina Alford</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    {/* <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use> */}
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 24</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Quote for a new web design project</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hey Brian,

                                                        Nisi officia aliqua ex non cupidatat sint ullamco. Irure pariatur ullamco consequat ut eu anim. Ut ad elit pariatur est non sunt. Tempor dolore quis commodo dolore d...</p>
                                                </div>
                                            </Link>
                                            {/* <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/fd117ed9-1285-4aca-8c1c-5c96e732c558">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-03.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Carla Gray</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 24</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Nulla culpa consectetur aute ex eu irure incididunt aliqua cupidatat sit cillum fugiat anim ea</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hey Brian,

                                                        Do pariatur occaecat tempor duis. Aute occaecat non consequat ut occaecat sint. Cillum reprehenderit elit nisi incididunt in labore pariatur. Labore mollit pariatur ...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/a307d83b-d256-4af5-948a-148878a7eaad">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-04.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Rice Cash</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 23</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Ipsum laborum minim aute labore in</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Laboris non ad et aute sint aliquip mollit voluptate velit dolore magna fugiat ex. Voluptate amet aute deserunt tempor non laboris cillum. Voluptate veniam magna si...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/67664fa3-3a87-4ab8-8c2c-dfd2b1de4c14">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-04.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Elaine Ortiz</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 23</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Ipsum fugiat ad deserunt cillum sunt fugiat</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use></svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hello Brian,

                                                        Id Lorem laborum eiusmod eiusmod mollit magna dolore. Et commodo officia fugiat dolor aliqua proident mollit ut commodo ullamco. Sunt nulla eu dolor velit velit re...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/d5913a7e-25f8-4163-bbf0-81d034163ce7">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-05.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Fleming Stone</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 23</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Deserunt exercitation ut nulla elit Lorem</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hi Brian,

                                                        Est labore sunt sunt Lorem dolore. In excepteur esse proident ut consectetur dolor voluptate laborum veniam pariatur. Excepteur ut veniam sit culpa exercitation qui n...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/b099a8e2-ffcc-4ae1-866d-8f8f6bd95ab3">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-06.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">England Wiley</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 20</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Minim do reprehenderit dolor ipsum officia magna laborum est anim in fugiat</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Ad do minim id ad ex sit reprehenderit labore do occaecat fugiat ut enim. Et sunt dolore sint non consequat ut. Esse deserunt nostrud pariatur nulla ullamco nulla s...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/7bd21940-3388-479c-b1bc-3ebceb0472d8">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-07.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Ingram Fowler</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 07</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Aliquip eiusmod pariatur adipisicing id consectetur sunt ad dolore consequat commodo</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Dolore sit occaecat est do fugiat sunt est amet nostrud. Aliqua ad veniam officia Lorem id aute fugiat laborum dolor magna dolor. Eiusmod nostrud qui sunt ut exerci...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/2d105bae-b4e5-4ba3-a40e-e9e2b5cc671a">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-05.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Diana Walsh</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jun 29</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Non anim id laborum in et id</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Tempor veniam do dolor laborum consectetur in sit incididunt nulla officia consectetur fugiat. In dolor consequat consectetur deserunt sit. Voluptate reprehenderit ...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/4c3bd79a-6429-466d-b962-8eb09c524969">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-08.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Mckinney Marsh</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jun 20</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Adipisicing proident laborum qui deserunt adipisicing exercitation id sint</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hi Brian,

                                                        Amet eiusmod est ipsum fugiat. Laborum dolor exercitation esse nostrud cillum. Sunt laboris culpa incididunt ullamco sint veniam dolore tempor non irure ipsum. Laboru...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/770d24d1-1b9b-49ec-bcb4-f6feffc305ff">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-09.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Meyer Fuller</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 31</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Excepteur sunt ut ipsum ad culpa aliqua quis</span>
                                                                <div className="flex ml-auto pl-8"><svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hey Brian,

                                                        Cupidatat cupidatat irure culpa est dolore qui laborum adipisicing occaecat nulla officia deserunt fugiat aliqua. Dolor quis sunt aliqua officia culpa esse eiusmod e...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/3e2100de-ca0a-4a8e-a1c5-6c13172333dc">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-06.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0"><div className="flex items-center w-full">
                                                            <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Carolina Wade</p>
                                                            <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use></svg><p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Mar 24</p>
                                                        </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">In sunt pariatur sunt sint exercitation</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hey Brian,

                                                        Reprehenderit proident mollit non eu mollit eu. Mollit exercitation non enim commodo sit eu eiusmod est cupidatat esse magna sint quis dolore. Esse deserunt ea sunt ...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/e1291d1a-fba6-4b23-b259-dd7c9074e976">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-10.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Graves Huber</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Mar 25</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Elit est aute anim ea culpa labore occaecat adipisicing officia</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Ad ex enim mollit quis nostrud nulla quis non minim voluptate cillum sint tempor mollit. Culpa anim occaecat aliquip do. Aliquip velit minim irure nostrud commodo e...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/7cba834c-3011-4897-be7d-ee43bbe69114">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-11.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Tucker Santiago</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Sep 17</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Ullamco qui ex eu ea officia labore incididunt</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Non tempor sint incididunt adipisicing cupidatat laboris elit incididunt ipsum magna. Voluptate labore cillum irure dolor eu est commodo nulla. Cupidatat aliquip re...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/d0de071d-2d72-4e0f-b903-79ca6ade9dbd">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-07.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Becky Cain</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Nov 30</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Exercitation amet laborum officia nulla nulla adipisicing mollit culpa eiusmod irure deserunt voluptate laborum</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Ad tempor veniam exercitation et occaecat do quis do cillum nulla mollit mollit nulla minim. Id sint do excepteur pariatur eu pariatur do sint ipsum ea. Enim in ex ...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/d39c93b9-10d3-426f-a205-0ee5b30cd983">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-12.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Miller Vazquez</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">May 06</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Ullamco eu nulla labore occaecat</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hey Brian,

                                                        Irure reprehenderit enim anim ad ex officia qui. Cillum amet reprehenderit aliquip minim adipisicing. Sint sit tempor non nostrud esse adipisicing eu.

                                                        Labore dolor ...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/4e881b4f-bf47-472f-a1fe-f787a66d37dd">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-13.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Delgado Stevens</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 17</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Ut velit occaecat nostrud ullamco non excepteur velit ipsum ut</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hey Brian,

                                                        Esse dolore exercitation id sint id eu dolor nisi. Irure consectetur aute eu ad aute velit et tempor ad eiusmod voluptate. Sit proident pariatur anim in culpa ut ess...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/5dad8b60-8d98-4215-88b8-41158e167686">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-08.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Concepcion Cleveland</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Aug 17</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Aliqua pariatur non tempor velit eu amet sit et proident Lorem</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hey Brian,

                                                        Pariatur anim aute excepteur consequat esse aliqua proident culpa duis duis veniam occaecat cupidatat eu. Lorem officia occaecat duis et exercitation mollit consecte...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/eeccc250-8952-47e1-adff-31847289b4dd">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-09.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Robin Berger</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Apr 26</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Reprehenderit ipsum aute cupidatat qui exercitation dolore voluptate labore veniam consequat quis</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hello Brian,

                                                        Exercitation minim anim commodo eu deserunt voluptate consectetur. Sit enim excepteur ipsum ea esse labore fugiat nulla. Do est tempor duis in consectetur proident...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/e8b006ad-e140-4fea-bb32-cc346e66eb93">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-10.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Lynnette Burton</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Nov 02</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Consectetur deserunt qui ex occaecat dolore officia cillum magna magna adipisicing elit magna velit</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hi Brian,

                                                        Nulla mollit excepteur ex officia anim cillum eiusmod. Fugiat ullamco ad eu elit Lorem eiusmod veniam ut ipsum cillum culpa. Dolore commodo ea quis labore qui irure v...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/c6fc1d86-4a1f-4071-9c75-618fe2d853aa">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-11.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Carmella Rios</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jul 05</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Proident dolore minim deserunt commodo elit aute laborum ullamco laboris anim consequat</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        In do ex sit amet fugiat duis eu non non duis id sit. Elit pariatur nostrud veniam Lorem aliquip tempor ipsum ut minim eiusmod ad. Sunt et veniam ad incididunt sint...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/c062a90f-52e9-4102-8def-1f8f9813deb4">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-14.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Molina Pace</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Sep 18</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Dolor anim non labore est aliquip sunt pariatur</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hi Brian,

                                                        Non fugiat eu aute nulla deserunt Lorem id fugiat consectetur duis ut reprehenderit nostrud. Laboris culpa id nulla duis id proident. Eiusmod consequat commodo aute e...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/545d12a6-e0f3-464d-af45-618163933a71">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-12.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Olga Osborn</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Sep 27</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Elit tempor enim nisi cillum cillum esse do magna exercitation minim</span><div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Eu voluptate dolore anim deserunt nostrud pariatur voluptate exercitation et et veniam fugiat sint consequat. Aute esse pariatur ullamco reprehenderit velit pariatu...</p>
                                                </div>
                                                </Link>
                                                <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/23456530-2cd4-4558-95d0-6311c2ee2ee8">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-13.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Brooke Petersen</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jul 22</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Anim laboris aliquip excepteur consectetur eu enim sunt velit qui deserunt</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hello Brian,

                                                        Consequat velit voluptate exercitation sint anim laboris. Consectetur dolor sunt veniam incididunt ad laboris proident tempor voluptate enim excepteur. Nostrud eu ...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/affeecf6-e3c5-4377-8070-96f5ed9c6500">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-15.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Estes Walter</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jul 17</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Reprehenderit ad do quis ut fugiat proident labore</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hello Brian,

                                                        Fugiat labore incididunt aute sint id laboris nisi eiusmod reprehenderit. Sint sint Lorem aute cillum velit occaecat sit quis laboris ipsum laborum. Ex ipsum ea pr...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/cb00d05c-6660-4dbb-a794-f22cff93f001">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5"><input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false">
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-16.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Holman Oconnor</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 14</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Duis dolore eu sint anim ipsum commodo esse cillum ipsum culpa commodo</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Dolore amet sunt ullamco enim quis tempor enim pariatur nostrud id nulla adipisicing. Reprehenderit amet ex ullamco pariatur proident et amet consequat ipsum sit ut...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/7bd27a67-df7c-4a2d-8042-1fb8a690d98e">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-17.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Oneill Irwin</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Nov 17</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Eu in ut dolor amet consequat aute esse non fugiat minim cillum sunt aliquip cillum</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Nostrud sint ea laboris excepteur dolor nisi mollit dolor voluptate irure ex. Laboris adipisicing id ad minim minim magna nostrud nulla quis nulla tempor. Qui incid...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/ccfb3a90-e18c-4645-8c00-4357d9bcd321">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-14.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Marcie Morgan</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Nov 20</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Magna velit cillum dolor reprehenderit aliqua ut aute nisi in sunt Lorem laboris elit do</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hi Brian,

                                                        Commodo id eu mollit dolor laboris incididunt exercitation labore duis eu mollit labore labore labore. Cupidatat fugiat aute non consequat eiusmod in Lorem. Consequat...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/a18b1961-ad32-4d00-984f-afef8ee0f4e9">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-18.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Crane Trevino</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Nov 03</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Tempor consectetur officia excepteur culpa</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Exercitation in non sint adipisicing reprehenderit eu est aute aute quis Lorem. Magna labore nisi amet magna do in. Eiusmod fugiat mollit mollit minim aute. Volupta...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/3aaa5e3f-b8b5-47fc-9967-5f65dd8c7251">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-15.jpg" className="MuiAvatar-img muiltr-1hy9t21" />

                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Kristine Wiggins</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 09</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Magna aute enim magna aliqua aliquip enim elit eiusmod nulla nostrud</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hi Brian,

                                                        Culpa incididunt qui nulla velit consectetur. Exercitation ut voluptate proident commodo non deserunt. Consectetur anim aute sunt aliquip fugiat laborum tempor exerci...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/0f72d2d0-bea4-4c0f-ace0-0be9f14c37f1">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-16.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Terrie Carney</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 23</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Laboris in incididunt labore labore deserunt deserunt nostrud mollit voluptate non ex</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hello Brian,

                                                        Reprehenderit veniam fugiat sunt in nulla anim commodo magna ex nulla. Mollit nostrud eiusmod aute veniam. Sint do cupidatat velit sit amet.

                                                        Ullamco elit anim ven...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/f825c5a3-2be8-4d48-9c4e-da60ff0e63f3">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-19.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Goff Jennings</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Aug 07</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Labore sint dolor nulla nostrud commodo amet nisi mollit commodo eiusmod duis quis irure non</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Nisi sit ut in do aliqua nostrud consectetur incididunt. Non et pariatur nulla mollit aute aliquip amet minim irure tempor eu id ipsum. Velit sunt tempor proident v...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/e6dc9600-a3ab-4571-b2f2-ed00ee08e163">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-20.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Browning Sanchez</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Mar 16</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Mollit cupidatat commodo consectetur duis ea elit est sint sunt ea qui nostrud incididunt</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hey Brian,

                                                        Velit ut elit ex voluptate nisi nostrud sunt pariatur dolore est dolor deserunt sint nostrud. Aute magna ipsum cillum cillum tempor voluptate cupidatat sunt eiusmod ...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/0f22fedf-ea89-414e-91a4-0df0d9501ef2">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-01.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Carey Lyons</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">May 01</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Laboris esse ipsum esse eu do ipsum do incididunt</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hello Brian,

                                                        Ipsum elit ut magna occaecat dolor sint reprehenderit eu incididunt sunt irure esse mollit. Sit fugiat amet laborum ullamco sit laborum Lorem irure minim ut. Labor...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/d942f99b-8925-49f0-b75b-2c48b714b1cf">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/male-02.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div><div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Hendrix Goodwin</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jan 22</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Magna consectetur occaecat excepteur elit</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hello Brian,

                                                        Sunt consequat elit aliquip sit nulla ad. Voluptate elit qui magna ipsum culpa pariatur laboris nisi sit laboris. Mollit eiusmod ut elit est aliquip nulla ea labor...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/036c24e8-d8bc-4f0e-9a72-6fa884d69bb3">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-17.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Leticia Fulton</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Mar 31</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Est nostrud labore excepteur quis consectetur proident cupidatat</span>
                                                                <div className="flex ml-auto pl-8"><svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hello Brian,

                                                        Officia incididunt sint est non aliquip eu deserunt sunt ad minim aliqua excepteur. Cillum dolor nostrud magna sunt nulla aute ut esse dolore magna eu. Dolore mini...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/3dac4463-73aa-4bd4-a3d8-662ce38635cc">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-18.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Carmen Shannon</p>
                                                                <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                                </svg>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jun 16</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Aute est laboris laborum consectetur cupidatat</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hey Brian,

                                                        Esse dolore laboris enim quis. Ullamco dolor exercitation nostrud occaecat in et ad Lorem sunt nisi. Ipsum quis dolor fugiat ex eu. Consequat voluptate elit ut exerc...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/6bb27e81-ee53-4db3-acc7-bd1267cd475d">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-19.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0"><div className="flex items-center w-full">
                                                            <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Hattie Snow</p>
                                                            <svg className="shrink-0 fill-current  mr-12 text-red-500 dark:text-red-600 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                <use xlink:to="assets/icons/heroicons-solid.svg#exclamation-circle"></use>
                                                            </svg>
                                                            <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Jun 08</p>
                                                        </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Officia exercitation exercitation ad exercitation ea ut ullamco</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hello Brian,

                                                        Incididunt aute pariatur quis reprehenderit tempor occaecat laborum nostrud labore sunt minim non eiusmod incididunt. Ipsum cupidatat qui reprehenderit ex enim iru...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/bfac8e5d-6487-4747-b827-67179ac5c206">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-20.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Brandi Bradley</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Nov 17</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Eiusmod nulla incididunt nostrud est mollit quis velit in non irure elit consectetur commodo irure</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hey Brian,

                                                        Officia ad enim aliqua ex labore nisi. Commodo cillum non occaecat laboris. Irure eu ut voluptate officia excepteur.

                                                        Nostrud ad proident qui cupidatat exercitation ...
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/81b49a0a-e934-422a-81a8-8506d6f24e0e">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-01.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Patsy Potter</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">May 15</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Ullamco fugiat fugiat non occaecat proident exercitation proident Lorem adipisicing commodo fugiat</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hello Brian,

                                                        Aute in culpa nulla aliqua laboris adipisicing in sit laborum. Enim exercitation duis qui ullamco. Ullamco eiusmod deserunt cillum nisi nulla nostrud voluptate fug...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="0" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-1k24f61" to="/apps/mailbox/inbox/8355b50a-f347-4177-8cef-6410c0aa46d1">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-02.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Kathleen Cox</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Aug 26</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Est fugiat reprehenderit cupidatat sunt velit aliquip reprehenderit exercitation</span>
                                                                <div className="flex ml-auto pl-8">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use>
                                                                    </svg>
                                                                    <svg className="shrink-0 fill-current  flex justify-center ml-4 text-orange-500 dark:text-orange-400 MuiBox-root muiltr-z3b6pe" size="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        <use xlink:to="assets/icons/heroicons-solid.svg#star"></use>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Hey Brian,

                                                        Reprehenderit elit do qui ut occaecat veniam. Laboris culpa cupidatat irure ipsum ea cupidatat. Occaecat ea nisi cillum eiusmod. Excepteur dolore ut commodo magna co...</p>
                                                </div>
                                            </Link>
                                            <Link tabIndex="0" unread="1" className="MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-padding MuiListItem-button items-start py-20 px-0 md:px-8 relative w-full muiltr-axgl9n" to="/apps/mailbox/inbox/6d2bfbce-465b-4e8f-a79e-cd13ab8571c6">
                                                <span className="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorSecondary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorSecondary MuiCheckbox-root MuiCheckbox-colorSecondary muiltr-zai8a5">
                                                    <input className="PrivateSwitchBase-input muiltr-1m9pwf3" tabIndex="-1" type="checkbox" data-indeterminate="false" />
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall muiltr-wsscrk" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckBoxOutlineBlankIcon">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                                    </svg>
                                                </span>
                                                <div className="flex flex-col flex-auto min-w-0">
                                                    <div className="flex w-full space-x-6 items-center">
                                                        <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                            <img src="assets/images/avatars/female-03.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                        </div>
                                                        <div className="flex flex-col w-full min-w-0">
                                                            <div className="flex items-center w-full">
                                                                <p className="MuiTypography-root MuiTypography-body1 mr-8 font-semibold truncate muiltr-18q2h9t">Kristina Ramirez</p>
                                                                <p className="MuiTypography-root MuiTypography-body1 ml-auto text-md text-right whitespace-nowrap muiltr-1n33bq6">Mar 06</p>
                                                            </div>
                                                            <div className="flex items-center w-full mt-4">
                                                                <span className="leading-4 truncate">Ea eu cupidatat voluptate magna et Lorem veniam aute ipsum consectetur nisi voluptate</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="MuiTypography-root MuiTypography-body1 mt-8 leading-normal line-clamp-2 muiltr-1n33bq6">Dear Brian,

                                                        Voluptate esse cillum dolor aliqua. Qui aliqua consectetur tempor irure dolor sunt excepteur eu. Aliqua incididunt velit id minim consequat.

                                                        Lorem cupidatat aliqua...</p>
                                                </div>
                                            </Link> */}
                                        </ul>
                                    </div>
                                    <div className="ps__rail-x" style={{left: "0px", bottom: "-5491px"}}>
                                        <div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div>
                                    </div>
                                    <div className="ps__rail-y" style={{top: "5491px", height: "569px", right: "0px"}}>
                                        <div className="ps__thumb-y" tabIndex="0" style={{top: "516px", height: "53px"}}></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='col-md-6'>
                            <div className="MuiDrawer-root MuiDrawer-docked FusePageSimple-sidebarWrapper permanent opened FusePageSimple-rightSidebar muiltr-1tu59u4">
                                <div className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper FusePageSimple-sidebar border-0 permanent MuiDrawer-paperAnchorRight MuiDrawer-paperAnchorDockedRight muiltr-7bze44">
                                    <div className="muiltr-1aat207 ps ps--active-y" style={{position: "relative"}}>
                                        <div className="FusePageSimple-sidebarContent">
                                            <div className="z-10 relative flex flex-col flex-0 w-full border-b">
                                                <div className="flex items-center justify-between w-full min-h-64 px-8 border-b MuiBox-root muiltr-bif79f">
                                                    <Link tabIndex="0" aria-current="page" className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium lg:hidden md:-mx-8 muiltr-26yqj3 active" to="/apps/mailbox/inbox/f9c4c091-3ac4-4df9-ac5d-aec7b07c8e3f">
                                                        <svg className="shrink-0 fill-current  MuiBox-root muiltr-ulpizx" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                            {/* <use xlink:to="assets/icons/heroicons-outline.svg#arrow-narrow-left"></use> */}
                                                        </svg>
                                                    </Link>
                                                    <div className="flex flex-1 justify-end items-center">
                                                        <div>
                                                            <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mx-4 muiltr-26yqj3" tabIndex="0" type="button" aria-label="Set labels">
                                                                <svg className="shrink-0 fill-current  MuiBox-root muiltr-ulpizx" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    {/* <use xlink:to="assets/icons/heroicons-outline.svg#tag"></use> */}
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mx-4 muiltr-26yqj3" tabIndex="0" type="button" aria-label="Set important">
                                                            <svg className="shrink-0 fill-current  text-red-600 dark:text-red-500 MuiBox-root muiltr-ulpizx" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#exclamation-circle"></use> */}
                                                            </svg>
                                                        </button>
                                                        <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mx-4 muiltr-26yqj3" tabIndex="0" type="button" aria-label="Set starred">
                                                            <svg className="shrink-0 fill-current  MuiBox-root muiltr-ulpizx" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                {/* <use xlink:to="assets/icons/heroicons-outline.svg#star"></use> */}
                                                            </svg>
                                                        </button>
                                                        <div className="mx-4">
                                                            <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium muiltr-26yqj3" tabIndex="0" type="button" id="basic-button" aria-controls="basic-menu" aria-haspopup="true">
                                                                <svg className="shrink-0 fill-current  MuiBox-root muiltr-ulpizx" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    {/* <use xlink:to="assets/icons/heroicons-outline.svg#dots-vertical"></use> */}
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap items-center py-20 px-24">
                                                    <div className="flex flex-auto my-4 mr-16 text-2xl">Please review and sign the attached agreement</div>
                                                    <div className="flex flex-wrap items-center justify-start -mx-4">
                                                        <div className="MuiChip-root h-24 border-0 m-4 text-blue-800 bg-blue-100 MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault muiltr-h5blb6">
                                                            <span className="MuiChip-label px-12 py-4 text-12 font-medium leading-none MuiChip-labelMedium muiltr-9iedg7">Personal</span>
                                                        </div>
                                                        <div className="MuiChip-root h-24 border-0 m-4 text-indigo-800 bg-indigo-100 MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault muiltr-h5blb6">
                                                            <span className="MuiChip-label px-12 py-4 text-12 font-medium leading-none MuiChip-labelMedium muiltr-9iedg7">Work</span>
                                                        </div>
                                                        <div className="MuiChip-root h-24 border-0 m-4 text-red-800 bg-red-100 MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault muiltr-h5blb6">
                                                            <span className="MuiChip-label px-12 py-4 text-12 font-medium leading-none MuiChip-labelMedium muiltr-9iedg7">Payments</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col flex-auto shrink-0 lg:shrink p-12 lg:overflow-y-auto MuiBox-root muiltr-bif79f">
                                                <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 flex flex-col flex-0 w-full shadow rounded-2xl overflow-hidden muiltr-4a7uzt">
                                                    <div className="flex flex-col py-32 px-24">
                                                        <div className="flex items-center w-full">
                                                            <div className="MuiAvatar-root MuiAvatar-circular muiltr-1fztojl">
                                                                <img src="https://react-material.fusetheme.com/assets/images/avatars/female-01.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                                                            </div>
                                                            <div className="ml-16 min-w-0">
                                                                <p className="MuiTypography-root MuiTypography-body1 font-semibold truncate muiltr-18q2h9t">Myra Dudley</p>
                                                                <div className="flex items-center mt-8 leading-5">
                                                                    <div>to</div>
                                                                    <div className="mx-4 font-semibold">me</div>
                                                                    <div>
                                                                        <span className="mx-4">and</span>
                                                                        <span className="mx-4 font-semibold">2</span>
                                                                        <span className="mx-4 font-semibold">others</span>
                                                                    </div>
                                                                    <div>
                                                                        <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium w-20 h-20 min-h-20 ml-4 muiltr-26yqj3" tabIndex="0" type="button" id="info-button" aria-controls="info-menu" aria-haspopup="true">
                                                                            <svg className="shrink-0 fill-current  MuiBox-root muiltr-2fiqvc" size="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                                {/* <use xlink:to="assets/icons/heroicons-solid.svg#chevron-down"></use> */}
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="MuiTypography-root MuiTypography-body2 flex mt-32 whitespace-pre-line leading-relaxed muiltr-1b2w1lj">Hi Brian,

                                                            Ullamco deserunt commodo esse deserunt deserunt quis eiusmod. Laborum sint excepteur non sit eiusmod sunt voluptate ipsum nisi ullamco magna. Lorem consectetur est dolor minim exercitation deserunt quis duis fugiat ipsum incididunt non. Anim aute ipsum cupidatat nisi occaecat quis sit nisi labore labore dolore do. Pariatur veniam culpa quis veniam nisi exercitation veniam ut. Quis do sint proident fugiat ad.

                                                            Non id nisi commodo veniam. Veniam veniam minim ea laborum voluptate id duis deserunt. Anim ut ut amet et ullamco nulla fugiat id incididunt adipisicing excepteur amet. Ex amet eu cillum non fugiat velit dolore. Incididunt duis est eu et ex sunt consectetur cillum nisi aute proident.

                                                            Incididunt excepteur laborum quis sit. Ex quis officia incididunt proident aliqua adipisicing. Irure ad in Lorem laborum deserunt nulla consequat. Pariatur excepteur exercitation cupidatat aute.

                                                            Cheers!
                                                            Myra Dudley</p>
                                                        <div className="flex flex-col w-full">
                                                            <div className="flex items-center mt-48">
                                                                <svg className="shrink-0 fill-current  MuiBox-root muiltr-2fiqvc" size="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                    {/* <use xlink:to="assets/icons/heroicons-solid.svg#paper-clip"></use> */}
                                                                </svg>
                                                                <div className="mx-8 font-semibold">3 Attachments</div>
                                                            </div>
                                                            <div className="flex flex-wrap -m-12 mt-12">
                                                                <div className="flex items-center m-12">
                                                                    <img className="w-40 h-40 rounded-md overflow-hidden" src="https://react-material.fusetheme.com/assets/images/avatars/female-01.jpg" alt="attachment" />
                                                                    <div className="mx-12">
                                                                        <p className="MuiTypography-root MuiTypography-body1 text-md font-medium truncate muiltr-18q2h9t">mystery-forest.jpg</p>
                                                                        <p className="MuiTypography-root MuiTypography-body1 text-sm font-medium truncate muiltr-1n33bq6">15.539 KB</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center m-12">
                                                                    <div className="flex items-center justify-center w-40 h-40 rounded-md overflow-hidden MuiBox-root muiltr-bif79f">
                                                                        <p className="MuiTypography-root MuiTypography-body1 flex items-center justify-center text-sm font-semibold muiltr-18q2h9t">PDF</p>
                                                                    </div>
                                                                    <div className="mx-12"><p className="MuiTypography-root MuiTypography-body1 text-md font-medium truncate muiltr-18q2h9t">montly-invoice.pdf</p>
                                                                        <p className="MuiTypography-root MuiTypography-body1 text-sm font-medium truncate muiltr-1n33bq6">243.449 KB</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center m-12">
                                                                    <img className="w-40 h-40 rounded-md overflow-hidden" src="https://react-material.fusetheme.com/assets/images/avatars/female-01.jpg" alt="attachment" />
                                                                    <div className="mx-12">
                                                                        <p className="MuiTypography-root MuiTypography-body1 text-md font-medium truncate muiltr-18q2h9t">birds-eye-sydney.jpg</p>
                                                                        <p className="MuiTypography-root MuiTypography-body1 text-sm font-medium truncate muiltr-1n33bq6">14.294 KB</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full p-24 border-t MuiBox-root muiltr-bif79f">
                                                        <div className="flex flex-wrap w-full -m-8">
                                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium m-8 muiltr-ytcglz" tabIndex="0" type="button">
                                                                <span className="MuiButton-startIcon MuiButton-iconSizeMedium muiltr-1l6c7y9">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-2fiqvc" size="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        {/* <use xlink:to="assets/icons/heroicons-solid.svg#reply"></use> */}
                                                                    </svg>
                                                                </span>Reply
                                                            </button>
                                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium m-8 muiltr-ytcglz" tabIndex="0" type="button">
                                                                <span className="MuiButton-startIcon MuiButton-iconSizeMedium muiltr-1l6c7y9">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-2fiqvc" size="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        {/* <use xlink:to="assets/icons/heroicons-solid.svg#reply"></use> */}
                                                                    </svg>
                                                                </span>Reply All
                                                            </button>
                                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium m-8 muiltr-ytcglz" tabIndex="0" type="button">
                                                                <span className="MuiButton-startIcon MuiButton-iconSizeMedium muiltr-1l6c7y9">
                                                                    <svg className="shrink-0 fill-current  MuiBox-root muiltr-2fiqvc" size="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                                        {/* <use xlink:to="assets/icons/heroicons-solid.svg#chevron-double-right"></use> */}
                                                                    </svg>
                                                                </span>Forward
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                                            <div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}>
                                            </div>
                                        </div>
                                        <div className="ps__rail-y" style={{top: "0px", right: "0px", height: "565px"}}>
                                            <div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "356px"}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Mailbox2;