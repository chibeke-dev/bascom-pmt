// import React from 'react';
// import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
 
//  export default class Pricing extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         }
//       }
    
 
//   render() {
//     return (
    
//       <PricingTable  highlightColor='#f44336'>   
//       <PricingSlot  onClick={this.submit} buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
    
//     <PricingDetail> <b>Unlimited task</b> Unlimited projects</PricingDetail>
//     <PricingDetail> <b>User</b> storage</PricingDetail>
//     <PricingDetail> <b>Unlimited activity log;</b> </PricingDetail>
//     <PricingDetail> <b>List view projects</b></PricingDetail>
//     <PricingDetail> <b>Calender view</b></PricingDetail>
// </PricingSlot>
// <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='STANDARD' priceText='$24/month'>
// <PricingDetail> <b>Unlimited task</b> Unlimited projects</PricingDetail>
//     <PricingDetail> <b>User</b> storage</PricingDetail>
//     <PricingDetail> <b>Unlimited activity log;</b> </PricingDetail>
//     <PricingDetail> <b>List view projects</b></PricingDetail>
//     <PricingDetail> <b>Calender view</b></PricingDetail>
// </PricingSlot>
// <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='PREMUIM ' priceText='$99/month'>
// <PricingDetail> <b>Unlimited task</b> Unlimited projects</PricingDetail>
//     <PricingDetail> <b>User</b> storage</PricingDetail>
//     <PricingDetail> <b>Unlimited activity log;</b> </PricingDetail>
//     <PricingDetail> <b>List view projects</b></PricingDetail>
//     <PricingDetail> <b>Calender view</b></PricingDetail>
//     <PricingDetail> </PricingDetail>
// </PricingSlot>
// <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month'>
//     <PricingDetail> <b>Unlimited task</b> Unlimited projects</PricingDetail>
//     <PricingDetail> <b>User</b> storage</PricingDetail>
//     <PricingDetail> <b>Unlimited activity log;</b> </PricingDetail>
//     <PricingDetail> <b>List view projects</b></PricingDetail>
//     <PricingDetail> <b>Calender view</b></PricingDetail>
// </PricingSlot> </PricingTable>
// ) 
//   }
// };


import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

 export default class Pricing extends React.Component {
  render() {
   
    return  ( <div style={{align:"center", color: "#000"}}><header>Pricing</header>
    get the power to control your project in diverse ways <PricingTable  highlightColor='#1976D2'>
    <PricingSlot highlighted onClick={this.submit} buttonText='TRY FREE' title='BASIC' priceText='$24/month'>
        <PricingDetail> <b>Unlimited task</b></PricingDetail>
        <PricingDetail> <b>Unlimited projects</b></PricingDetail>
        <PricingDetail> <b>Unlimited activity</b></PricingDetail>
        <PricingDetail> <b>Project tracking</b></PricingDetail>
        <PricingDetail> <b>Calander view</b></PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='STANDARD' priceText='$99/month'>
    <PricingDetail> <b>Unlimited task</b></PricingDetail>
        <PricingDetail> <b>Unlimited projects</b></PricingDetail>
        <PricingDetail> <b>Unlimited activity</b></PricingDetail>
        <PricingDetail> <b>Project tracking</b></PricingDetail>
        <PricingDetail> <b>Calander view</b></PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='PREMUIM' priceText='$200/month'>
    <PricingDetail> <b>Unlimited task</b></PricingDetail>
        <PricingDetail> <b>Unlimited projects</b></PricingDetail>
        <PricingDetail> <b>Unlimited activity</b></PricingDetail>
        <PricingDetail> <b>Project tracking</b></PricingDetail>
        <PricingDetail> <b>Calander view</b></PricingDetail>
    </PricingSlot>
</PricingTable> 



<div class="max-w-lg mx-auto flex justify-center text-white">
					<a href="#" class="hover:underline">
						Contact
					</a>
					<span class="mx-3">•</span>
					<a href="#" class="hover:underline">
						Privacy
					</a>
				</div>
</div>

    )
  }
}

