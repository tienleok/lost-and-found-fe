import React, { Fragment } from 'react'
import Faq from 'react-faq-component'

const data = {
  title: 'Frequently Asked Questions',
  rows: [
    {
      title: 'What is helpmelah.com?',
      content: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
      title: 'Where do I handover the item I found?',
      content: 'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.'
    },
    {
      title: 'Where do I collect the item I lost?',
      content: 'Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc'
    },
    {
      title: 'What is the package version',
      content: 'v1.0.5'
    }]
}

const FAQPage = () => (
  <Fragment >
    <div>
      <Faq data={data} />
    </div>
  </Fragment >
)

export default FAQPage
