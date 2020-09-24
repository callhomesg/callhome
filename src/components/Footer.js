import React from 'react';
import _ from 'lodash';

import {classNames, withPrefix, htmlToReact, Link} from '../utils';
import FooterMenu from './FooterMenu';
import Icon from './Icon';

export default class Footer extends React.Component {
    render() {
        let has_logo = false;
        let footer_content = false;
        let footer_social = false;
        if (_.get(this.props, 'pageContext.site.siteMetadata.footer.logo', null)) {
             has_logo = true;
        }
        if ((_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) || _.get(this.props, 'pageContext.site.siteMetadata.footer.links', null))) {
             footer_content = true;
        }
        if ((_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && _.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null))) {
             footer_social = true;
        }
        return (
            <React.Fragment>
                <footer className="site-footer">
                	{(((has_logo || _.get(this.props, 'pageContext.site.siteMetadata.footer.has_primary_nav', null)) || _.get(this.props, 'pageContext.site.siteMetadata.footer.has_secondary_nav', null)) || _.get(this.props, 'pageContext.site.siteMetadata.footer.has_tertiary_nav', null)) && (
                	<div className="site-footer__nav py-5 py-md-6">
                		<div className="container">
                			<div className={classNames('grid', {'justify-md-center': has_logo === false})}>
                				{has_logo && (
                				<div className="site-footer__logo cell-12 cell-md-5 my-4">
                					<img src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.footer.logo', null))} alt={_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)} />
                                    <div dangerouslySetInnerHTML={{ __html: "<p>\"বাড়িতে ফোন\" একটি ফোনের এপ্লিকেশন, যার সাহায্যে বিদেশী কর্মীরা সিঙ্গাপুর থেকে 3G ব্যবহার করে স্বদেশে তাঁদের প্রিয়জনদের যে কোন মোবাইল/ল্যান্ডলাইনে (ঘরের ফোনে) ফোন করতে পারেন। সিঙ্গাপুর থেকে অনেক যত্ন ও ভালোবাসা নিয়ে বানানো।Call Home is an app for migrant workers to call their families back home from 3G to landline calls. Built with love from Singapore.</p>" }} />
                				</div>
                				)}
                				{(_.get(this.props, 'pageContext.site.siteMetadata.footer.has_primary_nav', null) && _.get(this.props, 'pageContext.site.siteMetadata.footer.primary_nav_links', null)) && (
                				<div className="site-footer__menu cell-12 cell-md my-3 my-md-4">
                					{_.get(this.props, 'pageContext.site.siteMetadata.footer.primary_nav_title', null) && (
                					<h2 className="h4 mb-3 mb-md-4">{_.get(this.props, 'pageContext.site.siteMetadata.footer.primary_nav_title', null)}</h2>
                					)}
                					<FooterMenu {...this.props} footer_menu={_.get(this.props, 'pageContext.site.siteMetadata.footer.primary_nav_links', null)} />
                				</div>
                				)}
                				{(_.get(this.props, 'pageContext.site.siteMetadata.footer.has_secondary_nav', null) && _.get(this.props, 'pageContext.site.siteMetadata.footer.secondary_nav_links', null)) && (
                				<div className="site-footer__menu cell-12 cell-md my-3 my-md-4">
                					{_.get(this.props, 'pageContext.site.siteMetadata.footer.secondary_nav_title', null) && (
                					<h2 className="h4 mb-3 mb-md-4">{_.get(this.props, 'pageContext.site.siteMetadata.footer.secondary_nav_title', null)}</h2>
                					)}
                					<FooterMenu {...this.props} footer_menu={_.get(this.props, 'pageContext.site.siteMetadata.footer.secondary_nav_links', null)} />
                				</div>
                				)}
                				{(_.get(this.props, 'pageContext.site.siteMetadata.footer.has_tertiary_nav', null) && _.get(this.props, 'pageContext.site.siteMetadata.footer.tertiary_nav_links', null)) && (
                				<div className="site-footer__menu cell-12 cell-md my-3 my-md-4">
                					{_.get(this.props, 'pageContext.site.siteMetadata.footer.tertiary_nav_title', null) && (
                					<h2 className="h4 mb-3 mb-md-4">{_.get(this.props, 'pageContext.site.siteMetadata.footer.tertiary_nav_title', null)}</h2>
                					)}
                					<FooterMenu {...this.props} footer_menu={_.get(this.props, 'pageContext.site.siteMetadata.footer.tertiary_nav_links', null)} />
                				</div>
                				)}
                			</div>
                		</div>
                	</div>
                	)}
                	{(footer_content || footer_social) && (
                	<div className="site-footer__info py-3 py-sm-4">
                		<div className="container">
                			<div className="grid items-center">
                				{footer_content && (
                				<div className={classNames('site-footer__copyright', 'cell-12', {'cell-sm': footer_social})}>
                					{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}
                					{_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (link, link_idx) => (
                						<Link key={link_idx} to={withPrefix(_.get(link, 'url', null))} {...(_.get(link, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}>{_.get(link, 'label', null)}</Link>
                					))}
                				</div>
                				)}
                				{footer_social && (
                				<div className={classNames('site-footer__social', 'cell-12', {'cell-sm-auto': footer_content})}>
                					{_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (link, link_idx) => {
                					    let link_style = _.get(link, 'style', null) || 'link';
                					    return (
                    						(_.get(link, 'has_icon', null) && _.get(link, 'icon', null)) && (
                    						<Link key={link_idx} className={classNames('btn', 'btn--icon', {'btn--primary': link_style === 'primary', 'btn--secondary': link_style === 'secondary', 'btn--clear': link_style === 'link'})} to={withPrefix(_.get(link, 'url', null))} {...(_.get(link, 'new_window', null) ? ({target: '_blank', rel: 'noopener'}) : null)}>
                    							<Icon {...this.props} icon={_.get(link, 'icon', null)} />
                    							<span className="sr-only">{_.get(link, 'label', null)}</span>
                    						</Link>
                    						)
                    					)
                					})}
                				</div>
                				)}
                			</div>
                		</div>
                	</div>
                	)}
                </footer>
            </React.Fragment>
        );
    }
}
