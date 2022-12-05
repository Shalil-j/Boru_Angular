import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-add',
  templateUrl: './manage-add.component.html',
  styleUrls: ['./manage-add.component.css']
})
export class ManageAddComponent implements OnInit {

  address=[
    {locations_type:'home',place_address:'Room no.9',full_address:'	Dr E Borges Rd, Parel, 	Mumbai'},
    {locations_type:'office',place_address:'45-A',full_address:'	Canery Hill Rd, Dipugarha, 	Jharkhand'},
    {locations_type:'home',place_address:'78-A',full_address:'Noor Mahal, Turner Road, Bandra (W), 7th Rd, Bandra West'},
    {locations_type:'other',place_address:'Shop No. 17',full_address:' Nishigandha Apartment, Khetwani Nagar, Untwadi Road, Nasik Nagar, City Centre Mall & Bafna Jewellers, Opposite Khetwani Lawns'},
    {locations_type:'home',place_address:'262',full_address:'Bund Garden Rd, Bund Garden, Sangamvadi'},
    {locations_type:'home',place_address:'Flate no.2',full_address:'Film City Rd, IGIDR, Nagri Niwara Cooperative Housing Society, Goregaon East'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
