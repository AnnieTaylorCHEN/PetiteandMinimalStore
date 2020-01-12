import React from 'react'

const Product = props => {
    const {shop, lang, data, onClick} = props
    const srcImg = `https://${data.image.file.url}`
    const variants = data.variants.map(variant => {
        return {
          code: variant.code,
          name: variant.name,
          label: variant.size.name
        }
      })
      // console.log(variants)

      return (
        <div >
          <img src={srcImg} alt={data.name} />
          <h1>{data.name}</h1>
          <p>{data.description.description}</p>
          {/* <div className="large">
            <CLayer.Price
              skuCode={data.variants[0].code}
              AmountProps={amountProps}
            />
          </div> */}
  
          {/* <div className="select is-fullwidth variant-select-wrap">
            <CLayer.VariantSelect
              className="variant-select"
              PriceContainerId="price"
              AvailabilityMessageContainerId="availability-message"
              AddToBagId="add-to-bag"
              promptText={locale[lang].select_size}
              skus={variants}
            />
          </div>
          <CLayer.AddToBag
            className={`add-to-bag button is-success is-fullwidth`}
            id="add-to-bag"
            AvailabilityMessageContainerId="availability-message"
            text={locale[lang].add_to_bag}
            onClick={onClick}
          />
  
          <CLayer.AvailabilityMessageContainer id="availability-message" />
  
          <CLayer.AvailabilityMessageAvailableTemplate
            className="available-message has-text-success"
            availableTemplate={
              <p className="has-text-success">
                <span className="is-capitalized">{locale[lang].available}</span>{' '}
                in{' '}
                <CLayer.AvailabilityMessageMinDays className="available-message-min-days" />
                -
                <CLayer.AvailabilityMessageMaxDays className="available-message-max-days" />{' '}
                {locale[lang].days}
              </p>
            }
          />
          <CLayer.AvailabilityMessageUnavailableTemplate
            className="unavailable-message has-text-danger"
            unavailableTemplate={<p>{locale[lang].not_available}</p>}
          />
        </div> */}
      </div>

      )
}

export default Product