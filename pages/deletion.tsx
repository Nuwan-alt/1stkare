import { gql } from 'graphql-request'
import { NextSeo } from 'next-seo'

import Deletion from '../src/components/deletion/deletion'
import { strapiServerRequest } from '../src/utils/strapi/strapi-server-request'

import type { DeletionProps } from '../src/components/deletion/deletion'
import type { GetStaticProps } from 'next'

type DeletionPageProps = DeletionProps

function DeletionPage(props: DeletionPageProps) {
  return (
    <div className="page_container">
      <NextSeo title="Deletion" />

      <Deletion {...props} />
    </div>
  )
}

export default DeletionPage

export const getStaticProps: GetStaticProps<DeletionPageProps> = async () => {
  const {
    legal: {
      deletion: { content },
    },
  } = await strapiServerRequest<{
    legal: { deletion: { content: DeletionPageProps['content'] } }
  }>(
    gql`
      query Deletion_StaticProps {
        legal {
          deletion {
            content
          }
        }
      }
    `
  )

  return {
    props: {
      content,
    },
    revalidate: 1,
  }
}
