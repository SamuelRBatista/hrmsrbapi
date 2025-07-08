class Vacancy {
    constructor(id, title, description, address, city_name, state_name, salary, employment_name, company_name, banner) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.address = address;
        this.city_name = city_name; // Novo campo
        this.state_name = state_name; // Novo campo
        this.salary = salary;
        this.employment_name = employment_name;
        this.company_name = company_name;
        this.banner = banner;
        this.banner = banner; // Novo campo
    }
}

module.exports = Vacancy;
