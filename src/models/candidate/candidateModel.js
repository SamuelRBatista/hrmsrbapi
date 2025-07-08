class Candidate {
    constructor(id, name, email, phone, birth_date, experience, education, application_status) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.birth_date = birth_date;
        this.experience = experience;
        this.education = education;
        this.application_status = application_status;    
    }
}

module.exports = Candidate;
