import Container from '@/components/atoms/Container'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import Blocks from '@/components/molecules/Blocks'
import Hero from '@/components/organisms/Hero'
import getPagePropTypes from '@/functions/getPagePropTypes'
import getPostTypeStaticPaths from '@/lib/wordpress/_global/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/lib/wordpress/_global/getPostTypeStaticProps'
import {useTheme} from 'next-themes'

// Define route post type.
const postType = 'page'

/**
 * Render the Page component.
 *
 * @author WebDevStudios
 * @param {object} props      The component attributes as props.
 * @param {object} props.post Post data from WordPress.
 * @return {Element}          The Page component.
 */
export default function Page({post}) {
  const {theme, setTheme} = useTheme()
  return (
    <Layout seo={{...post?.seo}}>
      <div
        className={`template-${postType} ${post?.title
          .toLowerCase()
          .replace(/\s/g, '')}`}
      >
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="p-3 h-12 w-12 order-2 md:order-3"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          Dark Mode
        </button>
        <Container>
          {'/' === post?.slug ? (
            <Hero
              subtitle="4x more bloodier guts"
              className="homepage-hero"
              title="2x More Gore"
              body="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis."
              backgroundImage={{
                url: post?.featuredImage.node.sourceUrl
              }}
              cta={{icon: 'arrowRight', text: 'Take a look'}}
            />
          ) : null}
          <article className={`innerWrap`}>
            {'/' === post?.slug ? null : (
              <RichText tag="h1">{post?.title}</RichText>
            )}
            <Blocks blocks={post?.blocks} />
          </article>
        </Container>
      </div>
    </Layout>
  )
}

/**
 * Get post static paths.
 *
 * @author WebDevStudios
 * @return {object} Object consisting of array of paths and fallback setting.
 */
export async function getStaticPaths() {
  return await getPostTypeStaticPaths(postType)
}

/**
 * Get post static props.
 *
 * @author WebDevStudios
 * @param {object}  context             Context for current post.
 * @param {object}  context.params      Route parameters for current post.
 * @param {boolean} context.preview     Whether requesting preview of post.
 * @param {object}  context.previewData Post preview data.
 * @return {object}                     Post props.
 */
export async function getStaticProps({params, preview, previewData}) {
  return getPostTypeStaticProps(params, postType, preview, previewData)
}

Page.propTypes = {
  ...getPagePropTypes(postType)
}
