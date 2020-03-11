package com.tma.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Commande.
 */
@Entity
@Table(name = "commande")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Commande implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "magasin")
    private String magasin;

    @Column(name = "produit")
    private String produit;

    @Column(name = "prix")
    private Integer prix;

    @Column(name = "date")
    private String date;

    @ManyToOne
    @JsonIgnoreProperties("commandes")
    private Client client;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMagasin() {
        return magasin;
    }

    public Commande magasin(String magasin) {
        this.magasin = magasin;
        return this;
    }

    public void setMagasin(String magasin) {
        this.magasin = magasin;
    }

    public String getProduit() {
        return produit;
    }

    public Commande produit(String produit) {
        this.produit = produit;
        return this;
    }

    public void setProduit(String produit) {
        this.produit = produit;
    }

    public Integer getPrix() {
        return prix;
    }

    public Commande prix(Integer prix) {
        this.prix = prix;
        return this;
    }

    public void setPrix(Integer prix) {
        this.prix = prix;
    }

    public String getDate() {
        return date;
    }

    public Commande date(String date) {
        this.date = date;
        return this;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Client getClient() {
        return client;
    }

    public Commande client(Client client) {
        this.client = client;
        return this;
    }

    public void setClient(Client client) {
        this.client = client;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Commande)) {
            return false;
        }
        return id != null && id.equals(((Commande) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Commande{" +
            "id=" + getId() +
            ", magasin='" + getMagasin() + "'" +
            ", produit='" + getProduit() + "'" +
            ", prix=" + getPrix() +
            ", date='" + getDate() + "'" +
            "}";
    }
}
