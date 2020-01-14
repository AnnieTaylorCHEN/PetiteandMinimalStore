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
          className: 'large has-text-success'
        },
        compare: {
          className: 'large has-text-grey-light'
        }
      }

      return (
        <>
        <div >
          <img src={srcImg} alt={data.name} />
          <h1>{data.name}</h1>
          <p>{data.description.description}</p>

          <div>
            <CLayer.Price
              skuCode={data.variants[0].code}
              AmountProps={amountProps}
            />
            {loading ? <img src={loader} alt="loader" width="50" /> : null}
          </div>
  
          <div className="select is-fullwidth variant-select-wrap">
            <CLayer.VariantSelect
              className="variant-select"
              PriceContainerId="price"
              AvailabilityMessageContainerId="availability-message"
              AddToBagId="add-to-bag"
              promptText='select size'
              skus={variants}
            />
          </div>

          <CLayer.AddToBag
            className={`add-to-bag button is-success is-fullwidth`}
            id="add-to-bag"
            AvailabilityMessageContainerId="availability-message"
            text='BUY'
            onClick={onClick}
          />
  
          <CLayer.AvailabilityMessageContainer id="availability-message" />
  
          <CLayer.AvailabilityMessageAvailableTemplate
            className="available-message has-text-success"
            availableTemplate={
              <p className="has-text-success">
                <span className="is-capitalized">Avaialble</span>{' '}
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
        </div>
      </>
      )
}

export default Product