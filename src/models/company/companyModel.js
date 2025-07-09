class Company {
    constructor(id, cnpj, name, description, address, city_name, state_name, phone, email, website) {
        this.id = id;
        this.cnpj = cnpj;
        this.name = name;
        this.description = description;
        this.address = address;
        this.city_name = city_name; // Novo campo
        this.state_name = state_name; // Novo campo
        this.phone = phone;
        this.email = email;
        this.website = website;
    }
}

module.exports = Company;
