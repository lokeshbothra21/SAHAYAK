package com.example.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "Registration_Table")
public class Registration {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	@Embedded
	private Name name;
	@NotNull
	@javax.validation.constraints.Email
	private String Email;
	@NotNull
	//@Pattern(regexp = "^[a-zA-Z]\\w{3,14}$")
	private String Password;
	

	@Column(length = 50)
	@NotNull
	private String Address;
	//@Pattern(regexp = "/^(\\d{3})[- ]?(\\d{3})[- ]?(\\d{4})$/")
	@NotNull
	private String PhoneNo;
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "RoleId",referencedColumnName = "RoleId")
	private Role role;
	
	
}
