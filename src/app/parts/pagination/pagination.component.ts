import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaginationService} from '../../shared/services/pagination/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() public currentPage = 2;
  @Input() public numberOfPages;
  @Output() private changePageEmitter: EventEmitter<number> = new EventEmitter<number>();
  public shownPages = [];
  public isPrevExist: boolean;
  public isNextExist: boolean;

  constructor(private paginationService: PaginationService) { }

  public ngOnInit() {
    this.setShownPage();
    this.setPrevAndNextExisting();
  }

  public changePage(page: number): void {
    if (this.currentPage === page) {
      return;
    }

    this.currentPage = page;
    this.setPrevAndNextExisting();

    this.changePageEmitter.next(page);
  }
  private setShownPage(): void {
    this.shownPages = this.paginationService.getShownPages(this.currentPage, this.numberOfPages);
  }
  private setPrevAndNextExisting(): void {
    this.isPrevExist = false;
    this.isNextExist = false;

    if (this.currentPage !== 1) {
      this.isPrevExist = true;
    }
    if (this.currentPage !== this.numberOfPages) {
      this.isNextExist = true;
    }
  }
}
