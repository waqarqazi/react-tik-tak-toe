export class SystemValuesState {
  constructor() {
    this.practiceGroups = [];
    this.locations = [];
    this.states = [];
    this.weights = {
      bar: 0,
      expertise: 0,
      location: 0,
      practiceGroup: 0,
      status: 0,
    };
  }
}
