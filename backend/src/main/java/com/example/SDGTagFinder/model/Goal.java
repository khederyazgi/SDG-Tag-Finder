package com.example.SDGTagFinder.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "goals")
public class Goal {
        
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="goal_id")
        private Long id;      
        @Column(name="description")
        private String description;

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}
		
	            
}