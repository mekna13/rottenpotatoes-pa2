import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="select"
export default class extends Controller {
  params = new URLSearchParams(window.location.search)
  connect() {
    // attach action to the element
    this.element.dataset.action = "change->select#filter"
    // set initial params after page load
    this.element.value = this.params.get('sort')
  }
  filter() {
    const query = this.element.value
    this.params.set('sort', query)
    document.cookie = `sort=${query}; path=/; max-age=86400`
    window.location.reload(); 
    window.location.search = this.params.toString()
  }
}
