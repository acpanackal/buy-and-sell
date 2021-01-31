import { fakeListings } from './../fake.data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  email: String = '';
  message: String = '';
  listing: Listing;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const listingId = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => listing.id === listingId);
    this.message = `Hi, I'am interested in ${this.listing.name}`;
  }

  sendMessage(): void {
    alert('Message sent');
    this.router.navigateByUrl('/listings');
  }
}
