import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})

export class ShipmentComponent implements OnInit {
  gig=["zerty","azerty",12];
  formatDate= formatDate;
  
  data={
    "shipmentHistory": [{
            "eventDateTime": "2019-10-21T15:07:00",
            "shipmentIsDelayed": false,
            "eventPosition": {
                "status": "DELIVERED",
                "comments": " Signed by Joe",
                "city": "FREDERICK",
                "state": "MD",
                "country": "USA"
            }
        },
        {
            "eventDateTime": "2019-10-21T15:06:00",
            "shipmentIsDelayed": false,
            "eventPosition": {
                "status": "ARRIVED AT YOUR PLACE",
                "comments": "null",
                "city": "FREDERICK",
                "state": "MD",
                "country": "USA"
            }
        },
        {
            "eventDateTime": "2019-10-21T08:00:00",
            "shipmentIsDelayed": false,
            "eventPosition": {
                "status": "OUT FOR DELIVERY",
                "comments": "null",
                "city": "BELTSVILLE",
                "state": "MD",
                "country": "USA"
            }
        },
         {
             "eventDateTime": "2019-10-21T05:50:00",
             "shipmentIsDelayed": false,
             "eventPosition": {
                 "status": "DELIVERY SCHEDULED",
                 "comments": "null",
                 "city": "BELTSVILLE",
                 "state": "MD",
                 "country": "USA"
             }
         },
        {
            "eventDateTime": "2019-10-09T14:00:00",
            "shipmentIsDelayed": false,
            "eventPosition": {
                "status": "ARRIVED",
                "comments": "Arrived At Stop",
                "city": "BELTSVILLE",
                "state": "MD",
                "country": "USA"
            }
        },
        {
            "eventDateTime": "2019-10-09T13:48:24.374",
            "shipmentIsDelayed": false,
            "eventPosition": {
                "status": "PICK UP SCHEDULE",
                "comments": "null",
                "city": "NEW YORK",
                "state": "NY",
                "country": "USA"
            }
        },
        {
            "eventDateTime": "2019-10-06T11:35:24.374",
            "shipmentIsDelayed": true,
            "eventPosition": {
                "status": "PICK UP DELAYED",
                "comments": "Road Closed -Weather",
                "city": "NEW YORK",
                "state": "NY",
                "country": "USA"
            }
        },
        {
            "eventDateTime": "2019-10-04T21:03:30.816",
            "shipmentIsDelayed": false,
            "eventPosition": {
                "comments": "null",
                "status": "ARRIVED"
            }
        }
    ]
};

  constructor() { }

  ngOnInit(): void {
  }

}
