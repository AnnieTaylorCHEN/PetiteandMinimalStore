import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Customerservice = (props) => (
  <Layout {...props}>
    <SEO title="Customer Service" />
    <h1>Customer Service</h1>
    <section className="links-text">
      <h4>Shipping</h4>

      <p>
        SERVICES
        <br />
        Service: UPS Express Saver
        <br />
        Processing: 1-2 days
        <br />
        Delivery: 2-5 days
        <br />
        Total Delivery Time: 3-7 days <br />
      </p>

      <p>
        All international orders are shipped with UPS and require a signature
        upon delivery. UPS usually operate between 9am–6pm on business days. You
        can specify an alternate daytime delivery address when ordering, for
        example your work address (recommended). Please note that UPS cannot
        deliver to P.O. Boxes or APO/FPO addresses.
      </p>

      <p>
        TAXES AND DUTIES (INTERNATIONAL)
        <br />
        On checkout, Swedish value added tax (25%) will be deducted from the
        final price. Delivery is on a DAP (Delivery At Place) basis, meaning
        that taxes and duties are NOT included in the product price. Orders may
        be subjected to local taxes and/or import duties, which are levied by
        your local customs authority. The customer making the order has full
        responsibility of making sure that they are fully informed of these
        costs.{" "}
      </p>

      <h4>RETURNS AND REFUND POLICY</h4>

      <p>
        1. Make sure the products are in the same condition in which they were
        delivered to you, with all identification tags, packaging and seal still
        attached. If you are unsure whether we will accept your return; please
        see the important information section underneath for a complete list of
        criteria.
      </p>

      <p>
        2. Please visit our returns section and request a return online. Once
        your return has been approved you will receive a return (RMA) number and
        a return shipping label.{" "}
      </p>

      <p>
        3. Fill out two copies of the return form, place the item(s) and one
        copy of the return form in the original shipping box, or any other solid
        carton box. Close the box and tape it securely.
      </p>

      <p>
        4. Place the return shipping label on the box over the prior delivery
        information. Bring your parcel to the nearest UPS Access Point together
        with a copy of return form. Leave the package together with return form
        there. Please keep in mind that the return shipping fee of $ 15
        (International) will NOT be refunded.
      </p>

      <p>
        5. Your return will be accepted within 14 days from the delivery date at
        the warehouse.
      </p>
    </section>
  </Layout>
)

export default Customerservice
