import { render } from 'storyblok-rich-text-react-renderer-ts';
import Button from './Button';

const RichText = ({ content }) => {
    return (
        <div className="prose lg:prose-lg dark:prose-invert">
            {render(content, {
                blokResolvers: {
                    ['call_to_action']: (props) =>
                        <div className="flex flex-row justify-center my-4">
                            <Button
                                text={props.label}
                                link={`/${props.link.cached_url}`}
                            />
                        </div>
                }
            })}
        </div>
    )
}

export default RichText;
