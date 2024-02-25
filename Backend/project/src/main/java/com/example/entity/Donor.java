package com.example.entity;

import java.time.LocalDate;
import javax.persistence.CascadeType;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "Donor_Table")

public class Donor {
	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	private Long DonorId;
	@NotNull
	@Embedded
	private Name name;
	
	@NotNull
	private Long Age;
	@NotNull
	private LocalDate Date;
	@NotNull
	private Long Amount;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "RegistrationId",referencedColumnName = "Id")
	private Registration registrations;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "CampId", referencedColumnName = "CampId")
	private Camp camps;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "DonationId", referencedColumnName = "DonationId")
	private Donation1 Donation1;
	
}
