import React from 'react'
import * as CLayer from 'commercelayer-react'

import {usePriceLoading} from '../hooks'

import loader from '../images/loader.svg'

const Product = props => {
    const { data, onClick} = props

    const loading = usePriceLoading('clayer-prices-ready')

    const srcImg = `https://${data.image.file.url}`
    const variants = data.variants.map(variant => {
        return {
          code: variant.code,
          name: variant.name,
          label: variant.size.name
        }
      })
      // console.log(variants)

      const amountProps = {
        amount: {
          className: 'has-text-success'
        },
        compare: {
          className: 'has-text-grey-light'
        }
      }

      return (
        <>
        <div className="product-grid">
          <img src={srcImg} alt={data.name} />
          <div className="product__info">
              <h1 className="product__info__title">{data.name}</h1>
              <div className="product__info__desc" 
              dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html}}></div>

              <div className="product__info__price">
                <CLayer.Price
                  skuCode={data.variants[0].code}
                  AmountProps={amountProps}
                />
                {loading ? <img src={loader} alt="loader" width="50" /> : null}
              </div>
      
              <div className="product__info__sizes">
                <CLayer.VariantSelect
                  className="variant-select"
                  PriceContainerId="price"
                  AvailabilityMessageContainerId="availability-message"
                  AddToBagId="add-to-bag"
                  promptText='select size'
                  skus={variants}
                />
              </div>

      
              <CLayer.AvailabilityMessageContainer id="availability-message" />
      
              <CLayer.AvailabilityMessageAvailableTemplate
                className="available-message has-text-success"
                availableTemplate={
                  <p className="has-text-success">
                    <span className="is-capitalized">Available</span>{' '}
                    in{' '}
                    <CLayer.AvailabilityMessageMinDays className="available-message-min-days" />
                    -
                    <CLayer.AvailabilityMessageMaxDays className="available-message-max-days" />{' '}
                    days
                  </p>
                }
              />

              <CLayer.AvailabilityMessageUnavailableTemplate
                className="unavailable-message has-text-danger"
                unavailableTemplate={<p>Unavailable</p>}
              />

              <CLayer.AddToBag
                className="button"
                id="add-to-bag"
                AvailabilityMessageContainerId="availability-message"
                text='BUY'
                onClick={onClick}
              />
          </div>
        </div>
      </>
      )
}

export default Product