import React from 'react'
import * as CLayer from 'commercelayer-react'

const ShoppingBag = ({ open, close, lang }) => {
    return !lang ? null : (
		<div id='shopping-bag' className={open ? 'open' : ''}>
			<div className='shopping-bag-content'>
				<div>
                    <h6>
                        Shopping Bag
                    </h6>
					<p className="notice">Hi! If you don't see things added here, it probably means the test purchase limit is reached for the free demo for this month.😅 </p>
					<div>
						<CLayer.ShoppingBagTotal />
					</div>
				</div>

				<div className='shopping-bag-unavailable-message has-text-danger'>
					Out of Stock
				</div>

				<CLayer.ShoppingBagItems
					ItemsContainerTag='table'
					itemTemplate={
						<table id='shopping-bag-table' className='table'>
							<tr>
								<td className='shopping-bag-col shopping-bag-col-image'>
									<CLayer.ShoppingBagItemImage />
								</td>
								<td className='shopping-bag-col shopping-bag-col-name'>
									<CLayer.ShoppingBagItemName />
								</td>
								<td className='shopping-bag-col shopping-bag-col-qty'>
									<CLayer.ShoppingBagItemQtyContainer />
								</td>
								<td className='shopping-bag-col shopping-bag-col-total'>
									<CLayer.ShoppingBagItemUnitAmount />
								</td>
								<td className='shopping-bag-col shopping-bag-col-remove'>
									<CLayer.ShoppingBagItemRemove />
								</td>
							</tr>
						</table>
					}
				/>
				<div>
					<div >
						<button className="button"
							id='shopping-bag-close'
							onClick={close}
						>
							Continue Shopping
						</button>
					</div>
					<div className="checkout-btn">
						<CLayer.Checkout className="button" />
					</div>
				</div>
			</div>
		</div>
	)
}

ShoppingBag.defaultProps = {
	open: false
}

export default ShoppingBag